# EmailJS Setup Guide for Togetha Landing Page

## Overview
Your contact form has been upgraded to use EmailJS for actual email sending. Follow these steps to complete the setup.

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. The free plan includes 200 emails per month, which should be sufficient for your landing page

## 2. Set up Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider:
   - **Gmail** (recommended for simplicity)
   - **Outlook/Hotmail**
   - **Yahoo**
   - **Custom SMTP**
4. Follow the setup wizard to connect your email account
5. Note down the **Service ID** (e.g., `service_xyz123`)

## 3. Create Email Template
1. Go to **Email Templates** in EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: {{subject}}

From: {{from_name}} ({{from_email}})

Message:
{{message}}

---
This email was sent from the Togetha landing page.
Reply-To: {{reply_to}}
```

4. Set template variables:
   - `{{from_name}}` - sender's name
   - `{{from_email}}` - sender's email
   - `{{message}}` - the message content
   - `{{subject}}` - email subject
   - `{{reply_to}}` - sender's email for replies
5. Note down the **Template ID** (e.g., `template_abc456`)

## 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (e.g., `user_def789`)

## 5. Update Configuration
In `src/components/HelloWorld.vue`, replace the placeholder values:

```javascript
const EMAILJS_CONFIG = {
  serviceId: 'YOUR_SERVICE_ID',     // Replace with your Service ID
  templateId: 'YOUR_TEMPLATE_ID',   // Replace with your Template ID
  publicKey: 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
}
```

## 6. Test the Contact Form
1. Save the changes and run your application
2. Fill out the contact form and submit
3. Check if the email is received at hello@togetha.app
4. Verify the form shows success message and clears

## Features Implemented

### ✅ Real Email Sending
- Uses EmailJS to send actual emails
- No server required - works with static hosting

### ✅ Enhanced User Experience
- Loading spinner during submission
- Detailed status messages
- Form clears on successful submission
- Disabled button prevents double-submission

### ✅ Form Validation
- Required field validation
- Email format validation
- Minimum message length (10 characters)
- Real-time validation feedback

### ✅ Rate Limiting
- Prevents spam with 1-minute cooldown between submissions
- Shows remaining time if user tries to submit too quickly

### ✅ Error Handling
- Network error handling
- Fallback to mailto link if EmailJS fails
- Comprehensive error messages

### ✅ Security Features
- Input sanitization
- Rate limiting
- Client-side validation

## Troubleshooting

### Common Issues:

1. **"Failed to send" error**
   - Check your EmailJS credentials
   - Verify email service is properly connected
   - Check browser console for detailed errors

2. **Template not found**
   - Verify Template ID is correct
   - Ensure template is published in EmailJS dashboard

3. **Service not found**
   - Verify Service ID is correct
   - Ensure email service is active

4. **Blocked by CORS**
   - EmailJS handles CORS automatically
   - If issues persist, check EmailJS service status

### Testing Tips:
- Test with different email addresses
- Try sending to multiple recipients
- Check spam folder if emails don't arrive
- Monitor EmailJS dashboard for delivery status

## Email Template Customization

You can customize the email template in EmailJS dashboard to match your branding:

```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; }
        .header { background: #8b5cf6; color: white; padding: 20px; }
        .content { padding: 20px; }
    </style>
</head>
<body>
    <div class="header">
        <h2>New Contact from Togetha Landing Page</h2>
    </div>
    <div class="content">
        <p><strong>From:</strong> {{from_name}} ({{from_email}})</p>
        <p><strong>Message:</strong></p>
        <p>{{message}}</p>
        <hr>
        <p><small>This email was sent via the Togetha landing page contact form.</small></p>
    </div>
</body>
</html>
```

## Next Steps
1. Complete EmailJS setup with your credentials
2. Test the contact form thoroughly
3. Consider adding auto-reply functionality
4. Monitor email delivery rates in EmailJS dashboard
5. Set up email forwarding if needed

## Support
If you encounter issues:
- Check EmailJS documentation: https://www.emailjs.com/docs/
- Review browser console for errors
- Verify all configuration values are correct
- Test with a simple template first