<template>
  <div class="bg-background text-foreground">
    <!-- Navigation -->
    <nav
      class="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center">
              <div class="flex-shrink-0">
              <h1 class="text-2xl font-bold text-primary font-lexend">Togetha</h1>
            </div>
          </div>
          <div class="hidden md:block">
            <div class="ml-10 flex items-baseline space-x-8">
              <a href="#features"
                class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">Features</a>
              <a href="#testimonials"
                class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">Testimonials</a>
              <a href="#team"
                class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">Team</a>
              <a href="mailto:hello@togetha.app"
                class="text-muted-foreground hover:text-foreground px-3 py-2 text-sm font-medium transition-colors">Contact</a>
            </div>
          </div>
          <div class="flex items-center space-x-4">
            <!-- Theme toggle -->
            <button @click="toggleTheme" :aria-pressed="isDark"
              class="p-2 rounded-md text-muted-foreground hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              title="Toggle theme">
              <span class="sr-only">Toggle theme</span>
              <svg v-if="!isDark" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <circle cx="12" cy="12" r="5" />
              </svg>
              <svg v-else class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </button>

            <button
              class="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Get Togetha
            </button>
          </div>
        </div>
      </div>
    </nav>

  <!-- Hero Section -->
  <section class="relative overflow-hidden py-8 sm:py-12 hero-linear-gradient">
      <!-- Aurora background layers -->
      <div class="absolute inset-0" aria-hidden="true">
        <div class="aurora"></div>
        <div class="aurora aurora--two"></div>
        <div class="aurora aurora--three"></div>
      </div>
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
  <div class="flex flex-col lg:flex-row items-center gap-6">
          <!-- Text column -->
          <div class="lg:w-1/2 text-center lg:text-left">
            <h1 class="text-4xl sm:text-6xl font-bold text-balance leading-tight mb-4 text-white">
              Transform Your Health Sciences Studies with <span class="features-brand">Togetha</span>
            </h1>
            <p class="text-lg sm:text-xl text-white/90 text-pretty max-w-3xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              The all-in-one academic platform designed specifically for Nursing, Pharmacy, and MedTech students. Streamline your studies with smart note-taking, PDF reading with annotations, task management, and an AI chatbot for study assistance—all in one unified workspace.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center">
              <button @click="downloadApp" class="liquid-btn bg-white text-purple-900 hover:bg-white/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-xl">
                <span class="liquid-label">Download Togetha</span>
              </button>
            </div>
            <div class="mt-6 flex items-center justify-center lg:justify-start gap-4 text-sm text-white/80">
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Free for Students
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                No Setup Required
              </span>
              <span class="flex items-center gap-2">
                <svg class="w-4 h-4 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                </svg>
                Built for Students
              </span>
            </div>
          </div>

          <!-- Image column (carousel inside device mockup) -->
          <div class="lg:w-1/2 flex justify-center">
            <div class="device-outer group">
              <div class="device-frame">
                <!-- layered frame images (choose by breakpoint) -->
                <!-- Decorative frame layers removed to avoid background images on frames -->
                <div class="device-frame__img frame-1" aria-hidden="true"></div>
                <div class="device-frame__img frame-2" aria-hidden="true"></div>
                <div class="device-frame__img frame-3" aria-hidden="true"></div>
                <div class="device-frame__img frame-4" aria-hidden="true"></div>
                <div class="carousel" ref="carouselRef" @mouseenter="pauseAutoplay" @mouseleave="startAutoplay">
                  <div class="slides" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
                    <div v-for="(src, i) in slides" :key="i" class="slide">
                      <img :src="src.src" :srcset="src.srcset" :alt="src.alt" class="device-screen" loading="lazy" />
                    </div>
                  </div>
                  <div class="controls">
                    <button @click="prev" aria-label="Previous" class="control">‹</button>
                    <button @click="next" aria-label="Next" class="control">›</button>
                  </div>
                  <div class="indicators">
                    <button v-for="(s, idx) in slides" :key="idx" @click="goTo(idx)"
                      :class="['indicator', { 'active': idx === currentIndex }]" :aria-label="`Go to slide ${idx + 1}`" />
                  </div>
                </div>
              </div>
              <div class="device-reflection" aria-hidden="true"></div>
            

            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section id="features" class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Why <span class="features-brand">Togetha</span>?
          </h2>
          <p class="text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            Addressing tool fragmentation, Togetha integrates the most essential academic features for health sciences
            students into one platform:
          </p>
        </div>
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 items-stretch">
          <div
            class="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <IconEcosystem class="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-semibold mb-3">AI Academic Assistant</h3>
            <p class="text-muted-foreground leading-relaxed">Summarize, paraphrase, and generate quizzes from your study
              materials. Get discipline-specific explanations and support for Nursing, Pharmacy, and MedTech courses.
            </p>
          </div>
          <div
            class="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <IconDocumentation class="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Smart Note-Taking</h3>
            <p class="text-muted-foreground leading-relaxed">Take digital notes, convert handwriting to text with OCR,
              and receive AI-generated summaries for typed or scanned content.</p>
          </div>
          <div
            class="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <IconTooling class="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-semibold mb-3">PDF Reader & Annotator</h3>
            <p class="text-muted-foreground leading-relaxed">View, highlight, and annotate PDFs with an easy-to-use
              interface. Add notes, bookmarks, and export your annotated documents as PDF for sharing or download.</p>
          </div>
          <div
            class="bg-card border border-border rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 flex flex-col h-full">
            <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
              <IconSupport class="w-6 h-6 text-primary" aria-hidden="true" />
            </div>
            <h3 class="text-xl font-semibold mb-3">Task Management</h3>
            <p class="text-muted-foreground leading-relaxed">Create prioritized to-do lists, organize tasks by subject,
              and set calendar reminders—all in one place.</p>
          </div>

        </div>
      </div>
    </section>
    <!-- Academic Acknowledgements section removed per request -->

    <!-- Stats Section -->
    <section class="py-20 bg-muted">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 lg:grid-cols-4 gap-8" ref="statsGridRef">
          <div v-for="(stat, idx) in stats" :key="stat.label" class="text-center">
            <div class="text-3xl sm:text-4xl font-bold text-primary mb-2">{{ animatedValues[idx] }}</div>
            <div class="text-muted-foreground">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section id="testimonials" class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-4xl sm:text-5xl font-bold text-balance mb-4">
            Trusted by health sciences students
          </h2>
          <p class="text-2xl text-muted-foreground text-pretty max-w-2xl mx-auto">
            See how Togetha is helping students organize, learn, and excel in their academic journey.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="testimonial in testimonials" :key="testimonial.id"
            class="bg-card border border-border rounded-xl p-6">
            <div class="flex items-center mb-4">
              <div class="flex text-accent">
                <StarIcon v-for="i in 5" :key="i" class="w-5 h-5 fill-current" />
              </div>
            </div>
            <p class="text-muted-foreground mb-4 leading-relaxed">"{{ testimonial.content }}"</p>
            <div class="flex items-center">
              <div class="w-10 h-10 bg-muted rounded-full flex items-center justify-center mr-3">
                <span class="text-sm font-semibold">{{ testimonial.author.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold">{{ testimonial.author }}</div>
                <div class="text-sm text-muted-foreground">{{ testimonial.role }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Meet the Team -->
    <section id="team" class="py-20 bg-background">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl sm:text-4xl font-bold mb-2">Meet the Team</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">A small, multidisciplinary team building Togetha.</p>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          <div v-for="member in team" :key="member.name"
            class="bg-card border border-border rounded-xl p-6 flex flex-col items-center text-center">
            <div class="w-20 h-20 rounded-full bg-muted flex items-center justify-center text-xl font-semibold mb-4 overflow-hidden">
              <img v-if="member.avatar" :src="member.avatar" :alt="member.name" class="w-full h-full object-cover" />
              <span v-else class="text-primary">{{ member.initials }}</span>
            </div>
            <div class="font-semibold">{{ member.name }}</div>
            <div class="text-sm text-muted-foreground mb-3">{{ member.role }}</div>
            <p class="text-sm text-muted-foreground">{{ member.bio }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->

    <!-- CTA Section -->
    <section class="py-20 bg-gradient-to-r from-purple-600 to-purple-800 text-primary-foreground">
      <div class="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl sm:text-5xl font-bold text-balance mb-4">
          Ready to supercharge your productivity?
        </h2>
        <p class="text-2xl text-primary-foreground/80 text-pretty mb-8">
          Join thousands of professionals who are getting more done with AI-powered productivity.
        </p>
        <button @click="downloadApp" class="liquid-btn bg-background text-foreground hover:bg-background/90 px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg">
          <span class="liquid-label">Download Togetha</span>
        </button>
        <p class="text-sm text-primary-foreground/60 mt-4">Academic platform for health sciences • UIC Capstone 2025</p>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contact" class="py-20 bg-background">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-8">
          <h2 class="text-3xl sm:text-4xl font-bold mb-2">Get in touch</h2>
          <p class="text-lg text-muted-foreground max-w-2xl mx-auto">Have questions or want to collaborate? Send us a message and we'll get back to you within 2 business days.</p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div class="bg-card border border-border rounded-xl p-6">
            <h3 class="font-semibold mb-2">Contact Information</h3>
            <p class="text-muted-foreground mb-4">Email: <a href="mailto:hello@togetha.app" class="text-primary hover:underline">hello@togetha.app</a></p>
            <p class="text-muted-foreground mb-4">Location: University of the Immaculate Conception</p>
            <p class="text-muted-foreground">Prefer a call? Reply with your number and preferred time and we'll arrange it.</p>
          </div>

          <form @submit.prevent="submitContact" class="bg-card border border-border rounded-xl p-6 space-y-4">
            <div>
              <label for="contact-name" class="block text-sm font-medium text-muted-foreground">Name</label>
              <input id="contact-name" v-model="contactName" required class="mt-1 block w-full rounded-md border border-border bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label for="contact-email" class="block text-sm font-medium text-muted-foreground">Email</label>
              <input id="contact-email" type="email" v-model="contactEmail" required class="mt-1 block w-full rounded-md border border-border bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary" />
            </div>
            <div>
              <label for="contact-message" class="block text-sm font-medium text-muted-foreground">Message</label>
              <textarea id="contact-message" v-model="contactMessage" rows="5" required class="mt-1 block w-full rounded-md border border-border bg-transparent px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
            </div>
            <div class="flex items-center justify-between">
              <button type="submit" class="liquid-btn bg-primary text-primary-foreground px-4 py-2 rounded-md font-medium">
                <span class="liquid-label">Send message</span>
              </button>
              <div class="ml-4">
                <div v-if="contactStatus === 'sent'" class="text-sm text-primary">Message sent — thank you!</div>
                <div v-else-if="contactStatus === 'error'" class="text-sm text-destructive">Please fill in all fields correctly.</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="bg-background border-t border-border py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 class="font-semibold mb-4">Product</h3>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Pricing</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">API</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Company</h3>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">About</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Support</h3>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">Help Center</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Contact</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Status</a></li>
            </ul>
          </div>
          <div>
            <h3 class="font-semibold mb-4">Legal</h3>
            <ul class="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" class="hover:text-foreground transition-colors">Privacy</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Terms</a></li>
              <li><a href="#" class="hover:text-foreground transition-colors">Security</a></li>
            </ul>
          </div>
        </div>
        <div class="border-t border-border mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Togetha. All rights reserved.</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
// Add custom animation for gradient background
  import { ref, onMounted, onBeforeUnmount, computed } from 'vue'
// device frame images (user-provided PNGs)
import frame1 from '../assets/1.png'
import frame2 from '../assets/2.png'
import frame3 from '../assets/3.png'
import frame4 from '../assets/4.png'

// local SVG icon components
import IconTooling from './icons/IconTooling.vue'
import IconDocumentation from './icons/IconDocumentation.vue'
import IconEcosystem from './icons/IconEcosystem.vue'
import IconSupport from './icons/IconSupport.vue'

// near other refs
// Default to dark theme so the app opens in dark mode unless the user saved a preference.
const isDark = ref(true)
function applyTheme(dark) {
  const root = document.documentElement
  if (dark) root.classList.add('dark')
  else root.classList.remove('dark')
}
function toggleTheme() {
  isDark.value = !isDark.value
  applyTheme(isDark.value)
  localStorage.setItem('togetha:theme', isDark.value ? 'dark' : 'light')
}
onMounted(() => {
  const saved = localStorage.getItem('togetha:theme')
  if (saved) {
    // respect previously saved user choice
    isDark.value = saved === 'dark'
  } else {
    // no saved preference: default to dark
    isDark.value = true
  }
  applyTheme(isDark.value)
})

const PlayIcon = {
  template: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>`
}

const StarIcon = {
  template: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`
}

const CheckIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20,6 9,17 4,12"/></svg>`
}

const ZapIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>`
}

const ShieldIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12,22s8-4 8-10V5l-8-3-8,3v7c0,6 8,10 8,10z"/></svg>`
}

const TrendingUpIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>`
}

const UsersIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17,21v-2a4,4 0 0,0-4-4H5a4,4 0 0,0-4,4v2"/><circle cx="9" cy="7" r="4"/><path d="M23,21v-2a4,4 0 0,0-3-3.87"/><path d="M16,3.13a4,4 0 0,1,0,7.75"/></svg>`
}

const BarChartIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>`
}

const CogIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.4,15a1.65,1.65,0,0,0,.33,1.82l.06.06a2,2,0,0,1,0,2.83,2,2,0,0,1-2.83,0l-.06-.06a1.65,1.65,0,0,0-1.82-.33,1.65,1.65,0,0,0-1,1.51V21a2,2,0,0,1-2,2,2,2,0,0,1-2-2v-.09A1.65,1.65,0,0,0,9,19.4a1.65,1.65,0,0,0-1.82.33l-.06.06a2,2,0,0,1-2.83,0,2,2,0,0,1,0-2.83l.06-.06a1.65,1.65,0,0,0,.33-1.82,1.65,1.65,0,0,0-1.51-1H3a2,2,0,0,1-2-2,2,2,0,0,1,2-2h.09A1.65,1.65,0,0,0,4.6,9a1.65,1.65,0,0,0-.33-1.82L4.21,7.11a2,2,0,0,1,0-2.83,2,2,0,0,1,2.83,0L7.11,4.34A1.65,1.65,0,0,0,9,4.6a1.65,1.65,0,0,0,1-1.51V3a2,2,0,0,1,2-2,2,2,0,0,1,2,2v.09a1.65,1.65,0,0,0,1,1.51,1.65,1.65,0,0,0,1.82-.33l.06-.06a2,2,0,0,1,2.83,0,2,2,0,0,1,0,2.83L19.65,7.11A1.65,1.65,0,0,0,19.4,9a1.65,1.65,0,0,0,1.51,1H21a2,2,0,0,1,2,2,2,2,0,0,1-2,2h-.09A1.65,1.65,0,0,0,19.4,15Z"/></svg>`
}

const PenToolIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12,19l7-7 3,3-7,7-3-3Z"/><path d="M18,13l-1.5-7.5L2,2l3.5,14.5L13,18l5-5Z"/><path d="M2,2l7.586,7.586"/><circle cx="11" cy="11" r="2"/></svg>`
}

const BrainIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5,2A2.5,2.5,0,0,1,12,4.5V7a2.5,2.5,0,0,1,5,0v2a2.5,2.5,0,0,1,5,0v6a2.5,2.5,0,0,1-2.5,2.5H15a2.5,2.5,0,0,1-2.5-2.5V14a2.5,2.5,0,0,1-5,0v1A2.5,2.5,0,0,1,5,17.5H2.5A2.5,2.5,0,0,1,0,15V9A2.5,2.5,0,0,1,2.5,6.5H5A2.5,2.5,0,0,1,7.5,9V7A2.5,2.5,0,0,1,9.5,2Z"/></svg>`
}

const CheckSquareIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9,11 12,14 22,4"/><path d="M21,12v7a2,2,0,0,1-2,2H5a2,2,0,0,1-2-2V5A2,2,0,0,1,5,3h11"/></svg>`
}

const SyncIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23,4 23,10 17,10"/><polyline points="1,20 1,14 7,14"/><path d="M20.49,9A9,9,0,0,0,5.64,5.64L1,10m22,4L18.36,18.36A9,9,0,0,1,3.51,15"/></svg>`
}

const SearchIcon = {
  template: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="M21,21l-4.35-4.35"/></svg>`
}

// Data
const features = ref([
  {
    id: 1,
    icon: PenToolIcon,
    title: 'Smart Note-Taking',
    description: 'Capture ideas effortlessly with rich text, markdown support, and intelligent organization that learns from your habits.'
  },
  {
    id: 2,
    icon: CheckSquareIcon,
    title: 'AI-Powered Task Management',
    description: 'Turn notes into actionable tasks automatically. Smart prioritization and deadline suggestions keep you on track.'
  },
  {
    id: 3,
    icon: BrainIcon,
    title: 'AI Assistant',
    description: 'Get intelligent suggestions, automated summaries, and contextual insights to boost your productivity.'
  },
  {
    id: 4,
    icon: SearchIcon,
    title: 'Intelligent Search',
    description: 'Find anything instantly with AI-powered search that understands context and meaning, not just keywords.'
  },
  {
    id: 5,
    icon: SyncIcon,
    title: 'Cross-Platform Sync',
    description: 'Your notes and tasks sync seamlessly across all devices. Work anywhere, anytime with offline support.'
  },
  {
    id: 6,
    icon: ZapIcon,
    title: 'Quick Capture',
    description: 'Capture thoughts instantly with voice notes, web clipper, and lightning-fast input methods.'
  }
])

const stats = ref([
  { value: '20+', label: 'Notes Created' },
  { value: '50+', label: 'Tasks Completed' },
  { value: '70%', label: 'Time Saved' },
  { value: '30+', label: 'Happy Users' }
])

const testimonials = ref([
  {
    id: 1,
    content: 'Togetha made it so much easier to keep my notes, readings, and tasks in one place. The AI assistant helped me summarize complex topics for my MedTech board review.',
    author: 'Alyssa M.',
    role: 'MedTech Student, UIC'
  },
  {
    id: 2,
    content: 'I love how Togetha lets me highlight PDFs and get instant explanations. It saves me so much time when studying for nursing exams.',
    author: 'Jasper R.',
    role: 'Nursing Student, UIC'
  },
  {
    id: 3,
    content: 'Finally, a single app for notes, tasks, and AI-powered study help! Togetha is a must-have for any health sciences student.',
    author: 'Patricia C.',
    role: 'Pharmacy Student, UIC'
  }
])

// Team data for Meet the Team section
const team = ref([
    {
    name: 'Muriel Angelo M. Yaco',
    role: 'Product Manager',
    bio: 'Managed project planning and progress to ensure timely and goal-aligned completion.',
    initials: 'MY',
    avatar: null
  },
  {
    name: 'Paul Bantawig',
    role: 'Systems Analyst/ Database Designer',
    bio: 'Analyzed system requirements and helped design the database for efficiency and data integrity.',
    initials: 'PB',
    avatar: null
  },
  {
    name: 'Kobe J. Corpuz',
    role: 'Software Engineer/ Lead Developer',
    bio: 'Developed system features across front-end and back-end. Designed the database structure for efficient storage and security.',
    initials: 'KC',
    avatar: null
  },
  {
    name: 'Geric Lorint C. Gultiano',
    role: 'UI/UX Designer, Frontend Developer',
    bio: 'Designed the platform’s user interface for usability and responsiveness. Assisted in development and feature integration.',
    initials: 'GG',
    avatar: null
  },
  {
    name: 'Lorenz Eric J. Papacoy',
    role: 'Support Technical Writer',
    bio: 'Assisted in drafting and editing technical documents such as project reports.',
    initials: 'LP',
    avatar: null
  }
])


// Simple carousel slides (using the provided frame PNGs)
const slides = ref([
  { src: frame1, srcset: `${frame1} 1x`, alt: 'Togetha screenshot 1' },
  { src: frame2, srcset: `${frame2} 1x`, alt: 'Togetha screenshot 2' },
  { src: frame3, srcset: `${frame3} 1x`, alt: 'Togetha screenshot 3' },
  { src: frame4, srcset: `${frame4} 1x`, alt: 'Togetha screenshot 4' },
])

// Meet the team data removed — team section no longer rendered

const openProfile = (url) => {
  if (!url) return
  window.open(url, '_blank', 'noopener')
}

const currentIndex = ref(0)
let autoplayTimer = null
const carouselRef = ref(null)
let carouselObserver = null

// APK download configuration
// Direct link to GitHub Release asset
const apkUrl = ref('https://github.com/gericgultiano/Togetha-Landing/releases/download/v1.0.0/Togetha.Final.Version.apk')

// Debug function to test file accessibility
const testFileAccess = async () => {
  try {
    const response = await fetch(apkUrl.value)
    console.log('File test response:', response.status, response.headers.get('content-type'))
    return response.ok
  } catch (error) {
    console.error('File access test failed:', error)
    return false
  }
}

const next = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length
}

const prev = () => {
  currentIndex.value = (currentIndex.value - 1 + slides.value.length) % slides.value.length
}

const goTo = (i) => {
  currentIndex.value = i
}

const startAutoplay = () => {
  if (autoplayTimer) return
  autoplayTimer = setInterval(() => next(), 3500)
}

const pauseAutoplay = () => {
  if (autoplayTimer) {
    clearInterval(autoplayTimer)
    autoplayTimer = null
  }
}

// --- Animated counters for stats ---
const animatedValues = ref(stats.value.map(() => '0'))
let statsObserver = null
const statsGridRef = ref(null)

function parseStatTarget(display) {
  // returns { targetNumber, suffix }
  const raw = String(display).trim()
  if (raw.endsWith('%')) {
    const n = parseFloat(raw.replace('%', '')) || 0
    return { targetNumber: n, suffix: '%', compact: false }
  }
  const plus = raw.endsWith('+')
  const cleaned = raw.replace(/\+|\s/g, '')
  const match = cleaned.match(/([\d\.]+)\s*([MK])?/i)
  if (!match) return { targetNumber: 0, suffix: '', compact: false }
  let num = parseFloat(match[1]) || 0
  const scale = (match[2] || '').toUpperCase()
  if (scale === 'M') num = num * 1_000_000
  if (scale === 'K') num = num * 1_000
  return { targetNumber: num, suffix: plus ? '+' : '', compact: true }
}

function formatCompact(n) {
  try {
    return Intl.NumberFormat('en', { notation: 'compact', maximumFractionDigits: 0 }).format(Math.round(n))
  } catch (e) {
    return String(Math.round(n))
  }
}

function animateTo(index, target, suffix, compact) {
  const duration = 1200
  const start = performance.now()
  const from = 0
  function step(now) {
    const t = Math.min(1, (now - start) / duration)
    const eased = 1 - Math.pow(1 - t, 3)
    const value = from + (target - from) * eased
    animatedValues.value[index] = compact ? `${formatCompact(value)}${suffix}` : `${Math.round(value)}${suffix}`
    if (t < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

function onStatsInView(entries) {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      // trigger animation for each stat
      stats.value.forEach((s, idx) => {
        const { targetNumber, suffix, compact } = parseStatTarget(s.value)
        animateTo(idx, targetNumber, suffix, compact)
      })
      if (statsObserver) { statsObserver.disconnect(); statsObserver = null }
    }
  }
}

// Keyboard navigation for carousel
function handleKey(e) {
  if (e.key === 'ArrowLeft') prev()
  if (e.key === 'ArrowRight') next()
}

onMounted(() => {
  // start autoplay only when carousel is visible to reduce CPU on initial load
  if (carouselRef.value && 'IntersectionObserver' in window) {
    carouselObserver = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) startAutoplay()
        else pauseAutoplay()
      }
    }, { threshold: 0.5 })
    carouselObserver.observe(carouselRef.value)
  } else {
    // fallback: start autoplay after small delay
    setTimeout(() => startAutoplay(), 800)
  }

  window.addEventListener('keydown', handleKey)

  // setup stats intersection observer
  if (statsGridRef.value && 'IntersectionObserver' in window) {
    statsObserver = new IntersectionObserver(onStatsInView, { threshold: 0.4 })
    statsObserver.observe(statsGridRef.value)
  } else {
    // fallback: animate immediately
    stats.value.forEach((s, idx) => {
      const { targetNumber, suffix, compact } = parseStatTarget(s.value)
      animateTo(idx, targetNumber, suffix, compact)
    })
  }
})

onBeforeUnmount(() => {
  pauseAutoplay()
  window.removeEventListener('keydown', handleKey)
  if (statsObserver) { statsObserver.disconnect(); statsObserver = null }
  if (carouselObserver) { carouselObserver.disconnect(); carouselObserver = null }
})

// Methods


const downloadApp = () => {
  // Direct download from GitHub Release - simple and reliable
  console.log('Starting APK download from GitHub Release...')
  
  // Use window.location.href for the most reliable cross-browser download
  window.location.href = apkUrl.value
  
  console.log('✅ Download initiated from:', apkUrl.value)
}

// --- Contact form state & handler ---
const contactName = ref('')
const contactEmail = ref('')
const contactMessage = ref('')
const contactStatus = ref('')

function submitContact() {
  // basic client-side validation
  if (!contactName.value || !contactEmail.value || !contactMessage.value) {
    contactStatus.value = 'error'
    setTimeout(() => (contactStatus.value = ''), 3000)
    return
  }

  const subject = `Contact from ${contactName.value}`
  const body = `${contactMessage.value}\n\nName: ${contactName.value}\nEmail: ${contactEmail.value}`
  // open user's email client as a simple submission fallback
  window.location.href = `mailto:hello@togetha.app?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

  contactStatus.value = 'sent'
  // clear form
  contactName.value = ''
  contactEmail.value = ''
  contactMessage.value = ''
  setTimeout(() => (contactStatus.value = ''), 5000)
}
</script>

<style scoped>
/* ---------- Animations ---------- */
@keyframes aurora-pan {
  0% { transform: translate3d(-8%, 0, 0) rotate(-3deg); }
  50% { transform: translate3d(8%, -2%, 0) rotate(6deg); }
  100% { transform: translate3d(-6%, 2%, 0) rotate(-4deg); }
}

@keyframes fade-up {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  .aurora { animation: none; }
  .fade-in-up { animation: none; }
}

/* ---------- Hero & Aurora improvements ---------- */
.hero-linear-gradient {
  /* slightly darker, more contrast for white text */
  background: linear-gradient(135deg, #dcd6ff 0%, #c7b3ff 28%, #8b5cf6 60%, #4b1576 100%);
  position: relative;
}

.aurora {
  position: absolute;
  inset: -12%;
  z-index: 0;
  background:
    radial-gradient(40% 45% at 18% 32%, rgba(168,85,247,0.32), transparent 55%),
    radial-gradient(30% 40% at 82% 26%, rgba(99,102,241,0.28), transparent 60%),
    radial-gradient(50% 50% at 50% 80%, rgba(59,130,246,0.18), transparent 60%);
  filter: blur(14px) saturate(95%);
  animation: aurora-pan 3.5s ease-in-out infinite alternate;
  pointer-events: none;
}
.aurora--two { opacity: 0.65; animation-duration: 2.8s; }
.aurora--three { opacity: 0.5; animation-duration: 3.2s; }

/* subtle overlay for contrast without heavy opacity */
.hero-linear-gradient::after {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(180deg, rgba(8,5,21,0.12), rgba(8,5,21,0.06));
  z-index: 1;
  pointer-events: none;
}

/* apply a gentle fade-in to hero content */
.fade-in-up { animation: fade-up 520ms cubic-bezier(.2,.9,.2,1) both; }

/* ---------- Device mockup & carousel ---------- */
.device-outer {
  width: 500px; max-width: 100%; height: 520px; border-radius: 28px; box-sizing: border-box;
  transform: translateZ(0); will-change: transform, opacity; transition: transform 300ms cubic-bezier(.2,.9,.2,1), box-shadow 220ms;
}
.group:hover .device-outer { transform: rotateY(-6deg) translateY(-6px) scale(1.012); }

.device-frame {
  position: relative; height: 100%; padding: 18px; box-sizing: border-box; overflow: hidden;
  border-radius: 22px;
  background: linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02));
  box-shadow: 0 10px 30px rgba(8, 7, 22, 0.28), inset 0 1px 0 rgba(255,255,255,0.03);
  border: 1px solid rgba(255,255,255,0.04);
}

.device-frame::before {
  /* decorative soft glow */
  content: '';
  position: absolute; inset: 0; z-index: 0; border-radius: 22px;
  background: linear-gradient(135deg, rgba(168,85,247,0.06), rgba(99,102,241,0.04));
  pointer-events: none;
}

.device-screen { display:block; width:auto; max-height:100%; border-radius:16px; object-fit:cover; z-index:2; }
.device-reflection { position:absolute; inset:0; border-radius:24px; background: linear-gradient(180deg, rgba(255,255,255,0.03), transparent); mix-blend-mode: overlay; pointer-events:none; filter: blur(2.5px); z-index:3 }

@media (min-width: 1024px) { .device-outer { width: 920px; height: 640px; } }

.carousel { position: relative; z-index: 2; overflow: hidden; border-radius: 18px; height: 100%; }
.slides { display:flex; transition: transform 360ms cubic-bezier(.2,.9,.2,1); width:100%; will-change: transform; }
.slide { min-width:100%; display:flex; align-items:center; justify-content:center }
.controls { position:absolute; right:8px; bottom:8px; display:flex; gap:8px; }
.control { background: rgba(0,0,0,0.48); color:#fff; border:none; width:48px; height:48px; border-radius:10px; display:inline-flex; align-items:center; justify-content:center; cursor:pointer }
.control:hover { background: rgba(0,0,0,0.6) }
.indicators { position:absolute; left:50%; transform:translateX(-50%); bottom:12px; display:flex; gap:8px }
.indicator { width:12px; height:12px; border-radius:9999px; background: rgba(255,255,255,0.45); border:none; cursor:pointer }
.indicator.active { background:white; box-shadow: 0 6px 18px rgba(35, 21, 87, 0.28) }

/* ---------- Cards, glass surfaces & typography ---------- */
.bg-card {
  background: linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  backdrop-filter: blur(6px) saturate(100%);
  border: 1px solid rgba(255,255,255,0.04);
}
.bg-card:hover { transform: translateY(-6px); box-shadow: 0 10px 30px rgba(11,7,33,0.10) }

.features-brand {
  background: linear-gradient(90deg, #a855f7 0%, #8b5cf6 45%, #06b6d4 100%);
  -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip:text; color:transparent;
}

/* Stats styling */
.py-20.bg-muted .text-3xl { font-size: 2.75rem; }
.py-20.bg-muted .text-primary { color: #7c3aed }

/* ---------- Liquid button polish ---------- */
.liquid-btn { position: relative; overflow: hidden; display: inline-block }
.liquid-btn .liquid-label { position: relative; z-index: 2; display:inline-block }
.liquid-btn::before, .liquid-btn::after { content:''; position:absolute; z-index:1; width:160%; height:160%; left:-30%; top:-50%; background: radial-gradient(circle at 25% 35%, rgba(255,255,255,0.14), transparent 12%), radial-gradient(circle at 80% 75%, rgba(255,255,255,0.06), transparent 18%); transform:translate3d(0,0,0) scale(1); transition: transform 420ms cubic-bezier(.2,.9,.2,1), opacity 420ms; filter: blur(14px); opacity:0.9 }
.liquid-btn::after { left:-10%; top:-30%; opacity:0.5; filter: blur(20px) saturate(110%) }
.liquid-btn:hover::before, .liquid-btn:focus-visible::before { transform: translate3d(6px,6px,0) scale(1.04) rotate(3deg) }
.liquid-btn:hover::after, .liquid-btn:focus-visible::after { transform: translate3d(-6px,-6px,0) scale(1.02) rotate(-4deg); opacity:0.86 }

/* keyboard focus */
button:focus-visible, .control:focus-visible, .indicator:focus-visible { outline: 3px solid rgba(124,58,237,0.14); outline-offset: 3px }



/* small utility */
.fade-in-delayed { animation: fade-up 680ms cubic-bezier(.2,.9,.2,1) 120ms both }

#team .w-20 img { border-radius:9999px; display:block; width:100%; height:100%; object-fit:cover }
</style>
