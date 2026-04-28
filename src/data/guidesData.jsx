import React from 'react';
import { 
  Send, 
  MailWarning, 
  LogIn, 
  RefreshCcw, 
  ShieldAlert, 
  Paperclip, 
  Database, 
  Lock, 
  Server, 
  AlertTriangle 
} from 'lucide-react';

export const guidesData = [
  {
    id: 'emails-not-sending',
    title: 'Emails Not Sending',
    shortDesc: 'Emails stuck in outbox, sending failed, or message not delivered.',
    icon: <Send />,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    problem: 'You try to send an email, but it stays in the "Outbox" folder or returns a "Delivery Failed" notification. This often happens without a clear explanation, leaving you unsure if your message was ever received.',
    solution: 'First, check your internet connection and the size of any attachments (most providers limit this to 25MB). Next, verify your SMTP (outgoing server) settings. Often, simply removing the stuck email from the Outbox and re-composing it fixes temporary glitches. Follow our step-by-step instructions to re-authenticate your server settings if the problem persists.',
    conclusion: 'Most sending issues are temporary connection blips or configuration errors. Once fixed, your outgoing mail will flow smoothly again.'
  },
  {
    id: 'cant-receive-emails',
    title: 'Can’t Receive Emails',
    shortDesc: 'Inbox not updating, new emails missing, or delivery delay.',
    icon: <MailWarning />,
    color: 'text-green-600',
    bg: 'bg-green-50',
    problem: 'People tell you they sent an email, but it never shows up in your inbox. Your "Sync" indicator might spin endlessly, or the app might say it’s updated when it clearly isn’t.',
    solution: 'Check your "Spam" or "Junk" folders first. Ensure your mailbox storage isn’t full, as a full mailbox blocks all incoming mail. Verify your IMAP/POP settings—if these are wrong, your app can’t "pull" new mail from the server. Our resources provide a settings audit to find exactly where the delivery is breaking.',
    conclusion: 'Missing emails are usually stuck behind a filter or a full storage alert. Cleaning up your mailbox often restores instant delivery.'
  },
  {
    id: 'login-problems',
    title: 'Login Problems',
    shortDesc: 'Wrong password, account locked, or sign-in loop.',
    icon: <LogIn />,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    problem: 'You enter your password correctly, but the system says it’s wrong. Or, you get stuck in a "Loop" where it asks you to sign in over and over again. Sometimes your account might be locked for "too many attempts."',
    solution: 'Use the "Forgot Password" link to trigger a reset via your recovery phone or email. If you use Two-Factor Authentication (2FA), make sure your authentication app is synced to the correct time. Clearing your browser cache or app data often breaks sign-in loops. Our tutorials provide insights on navigating the official recovery forms if you’re completely locked out.',
    conclusion: 'Security protocols are strict to protect you. Recovery usually takes a few steps of identity verification, but it’s the only way to get back in safely.'
  },
  {
    id: 'email-not-syncing',
    title: 'Email Not Syncing',
    shortDesc: 'Emails not updating across devices or apps.',
    icon: <RefreshCcw />,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    problem: 'You delete an email on your phone, but it’s still there on your laptop. Your folders aren’t matching up, or read emails still show as "Unread" on other devices.',
    solution: 'This is almost always due to using "POP3" instead of "IMAP" protocol. IMAP is designed to sync actions across all devices, while POP3 is not. Our guides help you switch your account to IMAP settings without losing your existing emails, ensuring a perfect "Mirror" effect on every device you own.',
    conclusion: 'A properly synced inbox saves time and prevents confusion. Switching to IMAP is the industry standard for modern email management.'
  },
  {
    id: 'spam-junk-issues',
    title: 'Spam & Junk Issues',
    shortDesc: 'Important emails going to junk or too many spam messages.',
    icon: <ShieldAlert />,
    color: 'text-orange-600',
    bg: 'bg-orange-50',
    problem: 'Important work or personal emails are constantly ending up in the "Junk" folder, while actual spam is hitting your primary inbox. This makes you miss crucial information.',
    solution: 'You need to "Whitelist" important senders by adding them to your Safe Senders list. Conversely, use the "Block" feature for persistent spam. Our tutorials show you how to adjust your filter sensitivity settings so the automated systems learn what you actually want to see.',
    conclusion: 'Spam filters learn over time. By correctly marking "Not Junk" and "Block," you can train your inbox to be much smarter.'
  },
  {
    id: 'attachment-issues',
    title: 'Attachment Issues',
    shortDesc: 'Files not uploading, downloading, opening, or sending.',
    icon: <Paperclip />,
    color: 'text-red-600',
    bg: 'bg-red-50',
    problem: 'You click "Download" and nothing happens, or the file says it’s "Blocked for Security." Sometimes, you can’t upload a file because it says it’s too large.',
    solution: 'Check if the file type is "executable" (like .exe), as these are often blocked. For large files, use a cloud link (like Google Drive or OneDrive) instead of attaching the file directly. If downloads are failing, it might be an antivirus setting on your computer. Our guides show you how to adjust these safely.',
    conclusion: 'Attachments are the most common way viruses spread, so filters are naturally high. Knowing the right way to send large files makes communication much easier.'
  },
  {
    id: 'storage-full',
    title: 'Storage Full',
    shortDesc: 'Mailbox full, unable to receive new emails.',
    icon: <Database />,
    color: 'text-zinc-600',
    bg: 'bg-zinc-50',
    problem: 'You get a warning that your storage is 99% full. Once it hits 100%, you can no longer send OR receive any mail, essentially cutting off your communication.',
    solution: 'Search for emails with large attachments (e.g., "size:10mb") and delete those you no longer need. Empty your "Deleted Items" and "Junk" folders, as these still count toward your limit. Our resources show you how to set up an "Auto-Archive" system that moves old mail to your local computer to keep your cloud storage free.',
    conclusion: 'Regular maintenance is key. A clean mailbox is a fast mailbox.'
  },
  {
    id: 'account-blocked',
    title: 'Account Blocked',
    shortDesc: 'Your account is temporarily disabled or blocked for security.',
    icon: <Lock />,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    problem: 'You try to log in and get a message saying "Your account has been blocked" or "Suspicious activity detected." This often happens if you travel or try to log in from a new city.',
    solution: 'You will need to verify your identity using a code sent to your phone or backup email. If you don’t have those, you’ll need to fill out a detailed account recovery form. Our guides provide instructions on how to gather the information needed to pass these security checks and prove you are the rightful owner.',
    conclusion: 'Blocks are a safety feature to prevent hackers from accessing your data. While annoying, they are evidence that your provider is watching your back.'
  },
  {
    id: 'server-down',
    title: 'Server Down',
    shortDesc: 'The email server is not responding or currently unavailable.',
    icon: <Server />,
    color: 'text-cyan-600',
    bg: 'bg-cyan-50',
    problem: 'Your app shows an "Account Error" or says "Server Not Responding." You know your internet is fine because other websites work, but your email just won’t connect.',
    solution: 'Check the official status page for your provider (e.g., Google Workspace Status or Microsoft 365 Status). If there’s no global outage, the problem is likely your local server address (IMAP/SMTP URL). Our resources provide guidance on re-entering the correct server addresses to restore your connection immediately.',
    conclusion: 'Most "Server Down" messages are actually local configuration errors. Once the correct server path is set, your mail will return instantly.'
  },
  {
    id: 'phishing-alerts',
    title: 'Phishing Alerts',
    shortDesc: 'Warning about suspicious links or fraudulent emails.',
    icon: <AlertTriangle />,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    problem: 'You receive an email that looks like it’s from your bank or a delivery service, but something feels off. It asks you to "Click here to verify your account" or "Pay a small fee to release your package."',
    solution: 'Never click links in suspicious emails. Check the sender’s actual email address (not just the display name). If you’ve already clicked a link, change your password immediately and enable Two-Factor Authentication. Our resources show you how to scan your account for unauthorized changes and secure your personal data.',
    conclusion: 'Phishing is the #1 way accounts are stolen. Staying vigilant and recognizing the signs of a fake email is your best defense.'
  }
];
