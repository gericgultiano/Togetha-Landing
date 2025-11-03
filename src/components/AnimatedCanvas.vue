<template>
  <canvas 
    ref="canvas" 
    class="absolute inset-0 w-full h-full -z-20"
    :width="canvasWidth"
    :height="canvasHeight"
    aria-hidden="true"
  />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvas = ref(null)
const canvasWidth = ref(1400)
const canvasHeight = ref(600)

let gl = null
let program = null
let animationId = null
let time = 0.0
let lastFrame = Date.now()

// Shader sources
const vertexSource = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`

const fragmentSource = `#version 300 es
precision highp float;
uniform float width;
uniform float height;
uniform float time;
out vec4 fragColour;
void main(){
  vec2 resolution = vec2(width, height);
  vec2 uv = gl_FragCoord.xy/resolution;
  fragColour = vec4(uv, 0.5 + 0.5 * sin(time), 1.0);
}`

// Utility functions
function compileShader(shaderSource, shaderType) {
  const shader = gl.createShader(shaderType)
  gl.shaderSource(shader, shaderSource)
  gl.compileShader(shader)
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    throw "Shader compile failed with: " + gl.getShaderInfoLog(shader)
  }
  return shader
}

function getAttribLocation(program, name) {
  const attributeLocation = gl.getAttribLocation(program, name)
  if (attributeLocation == -1) {
    console.error("Cannot find attribute <", name, ">.", "Unused variables are optimised out.")
  }
  return attributeLocation
}

function getUniformLocation(program, name) {
  const uniformLocation = gl.getUniformLocation(program, name)
  if (uniformLocation == null) {
    console.error("Cannot find uniform <", name, ">.", "Unused variables are optimised out.")
  }
  return uniformLocation
}

function onWindowResize() {
  if (!canvas.value || !gl) return
  
  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight
  canvas.value.width = canvasWidth.value
  canvas.value.height = canvasHeight.value
  
  gl.viewport(0, 0, canvasWidth.value, canvasHeight.value)
  gl.uniform1f(widthHandle, canvasWidth.value)
  gl.uniform1f(heightHandle, canvasHeight.value)
}

let timeHandle, widthHandle, heightHandle

function initWebGL() {
  if (!canvas.value) return

  canvasWidth.value = window.innerWidth
  canvasHeight.value = window.innerHeight
  canvas.value.width = canvasWidth.value
  canvas.value.height = canvasHeight.value

  // Initialize WebGL2 context
  gl = canvas.value.getContext('webgl2')
  if (!gl) {
    console.error("Unable to initialize WebGL.")
    return
  }

  // Create shaders
  const vertexShader = compileShader(vertexSource, gl.VERTEX_SHADER)
  const fragmentShader = compileShader(fragmentSource, gl.FRAGMENT_SHADER)

  // Create program
  program = gl.createProgram()
  gl.attachShader(program, vertexShader)
  gl.attachShader(program, fragmentShader)
  gl.linkProgram(program)
  gl.useProgram(program)

  // Set up rectangle covering entire canvas
  const vertexData = new Float32Array([
    -1.0,  1.0,   // top left
    -1.0, -1.0,   // bottom left
     1.0,  1.0,   // top right
     1.0, -1.0,   // bottom right
  ])

  // Create vertex buffer
  const vertexDataBuffer = gl.createBuffer()
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexDataBuffer)
  gl.bufferData(gl.ARRAY_BUFFER, vertexData, gl.STATIC_DRAW)

  // Set up vertex attributes
  const positionHandle = getAttribLocation(program, 'position')
  gl.enableVertexAttribArray(positionHandle)
  gl.vertexAttribPointer(positionHandle, 2, gl.FLOAT, false, 2 * 4, 0)

  // Set uniform handles
  timeHandle = getUniformLocation(program, 'time')
  widthHandle = getUniformLocation(program, 'width')
  heightHandle = getUniformLocation(program, 'height')

  gl.uniform1f(widthHandle, canvasWidth.value)
  gl.uniform1f(heightHandle, canvasHeight.value)

  // Start render loop
  draw()

  // Add resize listener
  window.addEventListener('resize', onWindowResize)
}

function draw() {
  if (!gl) return

  // Update time
  const thisFrame = Date.now()
  time += (thisFrame - lastFrame) / 500
  lastFrame = thisFrame

  // Send uniforms to program
  gl.uniform1f(timeHandle, time)

  // Draw triangle strip
  gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4)

  animationId = requestAnimationFrame(draw)
}

onMounted(() => {
  initWebGL()
})

onUnmounted(() => {
  if (animationId) {
    cancelAnimationFrame(animationId)
  }
  window.removeEventListener('resize', onWindowResize)
})
</script>

<style scoped>
canvas {
  display: block;
}
</style>