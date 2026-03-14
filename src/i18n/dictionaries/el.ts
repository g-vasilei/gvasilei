import { ExperienceItem } from '../../app/data/data'

const el = {
  meta: {
    title: 'Γεώργιος Βασιλείου | Full Stack Developer',
    description:
      'Full stack developer με έδρα τη Θεσσαλονίκη, Ελλάδα. Εξειδίκευση σε React, Next.js, Node.js και σύγχρονες web τεχνολογίες. Διαθέσιμος για freelance projects.',
  },
  nav: [
    { id: 1, name: 'Εμπειρία', link: '#experience' },
    { id: 2, name: 'Portfolio', link: '#portfolio' },
    { id: 3, name: 'Επικοινωνία', link: '#contact' },
  ],
  hero: {
    tagline: 'Ο full stack developer σου',
    cta: 'Επικοινωνία',
    cv: 'Λήψη CV',
  },
  experience: {
    items: [
      {
        id: 1,
        title: 'Freelancer',
        displayedTitle: 'Freelance',
        subTitle: 'Full Stack',
        date: 'Ιαν 2020 - Τώρα',
        description:
          'Έμπειρος freelance developer με εξειδίκευση στη δημιουργία custom επαγγελματικών εφαρμογών με το MERN stack, single-page applications (SPAs) με Next.js, και ανάπτυξη e-commerce λύσεων με WooCommerce.',
      },
      {
        id: 2,
        title: 'Deloitte',
        displayedTitle: 'Deloitte',
        subTitle: 'Full Stack',
        date: 'Ιαν 2024 - Σεπ 2025',
        description:
          'Συνεισφορά σε σημαντικά projects τηρώντας επαγγελματικά πρότυπα όπως η Agile μεθοδολογία, εξασφαλίζοντας υψηλής ποιότητας ανάπτυξη και αποτελεσματική ομαδική συνεργασία.',
      },
      {
        id: 3,
        title: 'Bratnet Software Solution',
        displayedTitle: 'Bratnet',
        subTitle: 'Full Stack',
        date: 'Οκτ 2025 - Τώρα',
        description:
          'Ανάπτυξη backend υπηρεσιών για πλατφόρμα τιμολόγησης και εσωτερικά projects με Node.js, Express και TypeScript, καθώς και κατασκευή responsive front-end διεπαφών με React.',
      },
    ] as ExperienceItem[],
  },
  portfolio: {
    heading: 'Portfolio',
  },
  contact: {
    heading: 'Επικοινωνία',
    lets: "LET'S",
    work: 'WORK',
    together: 'TOGETHER',
    description:
      'Έχετε ένα project στο μυαλό σας, μια ερώτηση ή θέλετε απλά να πείτε γεια; Συμπληρώστε τη φόρμα και θα επικοινωνήσω μαζί σας το συντομότερο δυνατό.',
    location: 'Με έδρα τη Θεσσαλονίκη, Ελλάδα',
    availability: 'Διαθέσιμος για freelance projects',
    fields: {
      name: 'Ονοματεπώνυμο',
      email: 'Email',
      phone: 'Αριθμός Τηλεφώνου',
      message: 'Μήνυμα',
    },
    placeholders: {
      name: 'Γεώργιος Βασιλείου',
      email: 'hello@example.com',
      phone: '69X XXX XXXX',
      message: 'Πείτε μου για το project σας...',
    },
    submit: 'Αποστολή',
    submitting: 'Αποστολή...',
    success: {
      title: 'Το μήνυμα εστάλη!',
      description: 'Ευχαριστώ για την επικοινωνία. Θα σας απαντήσω το συντομότερο δυνατό.',
      again: 'Αποστολή νέου μηνύματος',
    },
    error: 'Κάτι πήγε στραβά. Παρακαλώ δοκιμάστε ξανά.',
  },
}

export default el
