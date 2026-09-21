import './InfoPages.css';

export default function AboutPage() {
  return (
    <main className="info-page">
      <header className="info-page__header">
        <p className="info-page__eyebrow">BADGER BREADTH TRANSFEROLOGY</p>
        <h1 className="info-page__title">About This Project</h1>
        <p className="info-page__lead">
          A student-centered interface concept for exploring how courses may
          satisfy UW-Madison breadth and general education requirements.
        </p>
      </header>

      <div className="about-grid">
        <section className="about-card" aria-labelledby="project-purpose">
          <h2 id="project-purpose">Project Purpose</h2>
          <p>
            Badger Breadth Transferology is an individual design and development
            project focused on making transfer-course discovery easier to scan,
            filter, and revisit.
          </p>
          <p>
            The interface supports AND/OR requirement filters, school-based
            results, course details, and browser-based bookmarks without requiring
            an account.
          </p>
        </section>

        <section className="about-card" aria-labelledby="about-creator">
          <h2 id="about-creator">About the Creator</h2>
          <p>
            My name is Xuantao (Jeff) Zhang. I am an M.S. student in Computer
            Science at UCLA with interests in human-centered AI, HCI, interface
            development, and AI product development.
          </p>
          <p>
            I graduated with distinction from UW-Madison with majors in Computer
            Sciences, Mathematics (Programming and Computing), and Statistics.
            Before transferring to UW-Madison, I studied Computing and AI at The
            Hong Kong Polytechnic University.
          </p>
        </section>
      </div>

      <aside className="project-notice" aria-label="Project disclaimer">
        <strong>Demonstration only.</strong> All course records in this project are
        mock data created for interface development and usability evaluation. This
        project is not affiliated with UW-Madison or Transferology and should not
        be used for academic planning or official transfer-credit decisions.
      </aside>
    </main>
  );
}
