import './InfoPages.css';

const faqItems = [
  {
    question: 'What is Badger Breadth Transferology?',
    answer:
      'It is a demonstration interface that explores a clearer way to search, compare, and save possible transfer-course options for UW-Madison requirements.',
  },
  {
    question: 'Is the course data official?',
    answer:
      'No. All course records are mock data created for interface development and usability evaluation. They do not represent official transfer-credit decisions.',
  },
  {
    question: 'How do the AND and OR filters work?',
    answer:
      'Match all (AND) returns courses that satisfy every selected requirement. Match any (OR) returns courses that satisfy at least one selected requirement.',
  },
  {
    question: 'Where are saved courses stored?',
    answer:
      'Saved course identifiers are stored in your browser using localStorage. The project does not require an account or send saved-course data to a server.',
  },
  {
    question: 'Will my saved courses appear on another device?',
    answer:
      'No. Saved courses remain in the browser and device where they were added. Clearing browser storage may also remove them.',
  },
  {
    question: 'Why might a course not appear in the results?',
    answer:
      'The demonstration uses a limited mock dataset, so it does not include every institution, course, or requirement combination.',
  },
  {
    question: 'Can this tool replace Transferology or academic advising?',
    answer:
      'No. Use official Transferology results and consult an academic advisor before making enrollment or transfer-credit decisions.',
  },
];

export default function FaqPage() {
  return (
    <main className="info-page">
      <header className="info-page__header">
        <p className="info-page__eyebrow">HELP AND PROJECT DETAILS</p>
        <h1 className="info-page__title">Frequently Asked Questions</h1>
        <p className="info-page__lead">
          Learn how search, filters, and locally saved courses work in this
          demonstration interface.
        </p>
      </header>

      <dl className="faq-list">
        {faqItems.map(({ question, answer }) => (
          <div className="faq-item" key={question}>
            <dt>{question}</dt>
            <dd>{answer}</dd>
          </div>
        ))}
      </dl>
    </main>
  );
}
