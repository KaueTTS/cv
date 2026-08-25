import { useState } from 'react';
import {
  courses,
  education,
  experiences,
  interests,
  languages,
  professionalSummary,
  profile,
  skillGroups,
} from './data/resume';

function DownloadIcon() {
  return <svg className="download-ic" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 3v10m0 0-4-4m4 4 4-4M4 15h12" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function ExternalLinkIcon() {
  return <svg className="download-ic" width="18" height="18" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M11 3h6v6m0-6-8 8M15 11v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h4" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function CheckIcon() {
  return <svg width="19" height="19" viewBox="0 0 22 22" fill="none" aria-hidden="true"><circle cx="11" cy="11" r="10" stroke="#2563eb" strokeWidth="2" /><path d="m7 11 3 3 5-5" stroke="#2563eb" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

function Experience({ experience }) {
  const [expanded, setExpanded] = useState(false);
  return <div className="exp-item">
    <div className="exp-dot" />
    <div className="exp-info">
      <div className="exp-title">{experience.title}</div>
      <div className="exp-company">{experience.company}</div>
      <div className="exp-date">{experience.date}</div>
      <div className="exp-description">
        {experience.summary && <p>{experience.summary}</p>}
        {expanded && <div className="conteudo-extra app-visible"><ul className="exp-list">{experience.highlights.map(({ text }) => <li key={text}>{text}</li>)}</ul></div>}
        <button className="btn-ler-mais" type="button" onClick={() => setExpanded((value) => !value)} aria-expanded={expanded}>{expanded ? 'Ler menos' : 'Ler mais...'}</button>
      </div>
    </div>
  </div>;
}

function SkillsCarousel() {
  const [current, setCurrent] = useState(0);
  const [touchStartX, setTouchStartX] = useState(null);
  const total = skillGroups.length;
  const goTo = (index) => setCurrent((index + total) % total);
  const handleKeyDown = (event) => {
    if (event.key === 'ArrowLeft') goTo(current - 1);
    if (event.key === 'ArrowRight') goTo(current + 1);
  };
  const handleTouchEnd = (event) => {
    if (touchStartX === null) return;
    const distance = touchStartX - event.changedTouches[0].clientX;
    if (Math.abs(distance) > 50) goTo(distance > 0 ? current + 1 : current - 1);
    setTouchStartX(null);
  };
  return <div className="skills-carousel" tabIndex="0" onKeyDown={handleKeyDown} onTouchStart={(event) => setTouchStartX(event.touches[0].clientX)} onTouchEnd={handleTouchEnd} aria-label="Carrossel de habilidades">
    <div className="carousel-viewport">
      <div className="carousel-track" style={{ transform: `translateX(-${current * 100}%)` }}>
        {skillGroups.map(([title, skills]) => <div className="carousel-slide" key={title} aria-hidden={title !== skillGroups[current][0]}>
          <div className="skill-card"><div className="card-title"><CheckIcon />{title}</div><div className="skills-list">{skills.map((skill) => <span className="skill-badge" key={skill}>{skill}</span>)}</div></div>
        </div>)}
      </div>
    </div>
    <button className="carousel-btn carousel-prev" type="button" onClick={() => goTo(current - 1)} aria-label="Slide anterior"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m15 18-6-6 6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
    <button className="carousel-btn carousel-next" type="button" onClick={() => goTo(current + 1)} aria-label="Próximo slide"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="m9 18 6-6-6-6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></svg></button>
    <div className="carousel-dots">{skillGroups.map(([title], index) => <button className={`carousel-dot ${index === current ? 'active' : ''}`} type="button" onClick={() => goTo(index)} aria-label={title} aria-current={index === current} key={title} />)}</div>
  </div>;
}

function App() {
  const [isGeneratingPdf, setIsGeneratingPdf] = useState(false);
  const handlePdfDownload = async () => {
    setIsGeneratingPdf(true);
    try {
      const { downloadResumePdf } = await import('./components/PdfResume');
      await downloadResumePdf();
    } catch (error) {
      console.error('Falha ao gerar o currículo em PDF:', error);
      window.alert('Não foi possível gerar o PDF. Tente novamente.');
    } finally {
      setIsGeneratingPdf(false);
    }
  };

  return <>
    <div className="container">
    <aside className="side" aria-label="Perfil lateral">
      <div className="avatar-glass"><div className="avatar"><img src="/img/avatar.jpg" alt={`Foto de ${profile.name}`} /></div></div>
      <header><h1 className="name">{profile.name}</h1><div className="dob">{profile.ageAndBirthDate}</div></header>
      <section aria-label="Contato"><div className="section-title">Contatos</div><ul className="info">
        <li>📧 <a href={`mailto:${profile.email}`}>{profile.email}</a></li><li>📱 <a href={`tel:${profile.phoneHref}`}>{profile.phone}</a></li><li>🌍 <a href={profile.mapUrl} target="_blank" rel="noreferrer">{profile.location}</a></li><li>💻 <a href={profile.githubUrl} target="_blank" rel="noreferrer">{profile.github}</a></li><li>🌐 <a href={profile.linkedinUrl} target="_blank" rel="noreferrer">{profile.linkedin}</a></li>
      </ul></section>
      <section aria-label="Hobbies"><div className="section-title">Interesses</div><div className="skills">{interests.map((interest) => <span className="skill-chip" key={interest}>{interest}</span>)}</div></section>
      <section aria-label="Idiomas"><div className="section-title">Idiomas</div><ul className="info">{languages.map((language) => <li key={language.name}><strong>{language.name}</strong><span>{language.level.replace(' (em desenvolvimento)', '')}</span></li>)}</ul></section>
      <section aria-label="Cursos e Certificados"><div className="section-title">Últimos Cursos</div><ul className="info"><li><strong>Inglês</strong><span>Kultive — 2026 (em andamento)</span></li>{courses.map((course) => <li key={course.name}><strong>{course.name}</strong><span>{course.provider} — {course.year}{course.duration ? ` (${course.duration})` : ''} <a href={course.url} target="_blank" rel="noreferrer">Ver ↗</a></span></li>)}</ul></section>
      <div className="download"><button className="download-btn" type="button" onClick={handlePdfDownload} disabled={isGeneratingPdf} aria-label="Baixar currículo em PDF"><DownloadIcon />{isGeneratingPdf ? 'Gerando PDF...' : 'Baixar PDF'}</button><a href="https://drive.google.com/drive/folders/1UE78BwlHUbnPWT_SHRywP08sHrkd8QYi?usp=sharing" target="_blank" rel="noreferrer" className="download-btn" aria-label="Abrir certificados em nova aba"><ExternalLinkIcon />Certificados</a></div>
    </aside>
    <main className="main">
      <section><div className="section-title">Sobre Mim</div><div className="about">{professionalSummary.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div></section>
      <hr className="section-divider" />
      <section><div className="section-title">Experiência</div><div className="exp">{experiences.map((experience) => <Experience experience={experience} key={experience.title} />)}</div></section>
      <hr className="section-divider" />
      <section><div className="section-title">Educação</div><div className="edu"><div className="edu-item"><div className="edu-dot" /><div className="edu-info"><div className="edu-title">{education.degree}</div><div className="edu-org">{education.institution}</div><div className="edu-date">{education.period}</div></div></div></div></section>
      <hr className="section-divider" />
      <section><div className="section-title">Habilidades</div><SkillsCarousel /></section>
    </main>
    </div>
  </>;
}

export default App;
