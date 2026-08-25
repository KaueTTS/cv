import {
  Document,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
  pdf,
} from '@react-pdf/renderer';
import {
  courses,
  education,
  experiences,
  languages,
  professionalSummary,
  profile,
  resumeSkillGroups,
} from '../data/resume';

const colors = {
  primary: '#1d4ed8',
  text: '#172033',
  muted: '#536078',
  divider: '#cbd5e1',
  soft: '#eff6ff',
};

const styles = StyleSheet.create({
  page: {
    paddingTop: 34,
    paddingRight: 40,
    paddingBottom: 34,
    paddingLeft: 40,
    backgroundColor: '#ffffff',
    color: colors.text,
    fontFamily: 'Helvetica',
    fontSize: 9.4,
    lineHeight: 1.38,
  },
  header: {
    paddingBottom: 12,
    borderBottomWidth: 1.5,
    borderBottomColor: colors.primary,
  },
  name: {
    marginBottom: 11,
    fontSize: 21,
    fontFamily: 'Helvetica-Bold',
    color: colors.primary,
  },
  headline: {
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    color: colors.text,
  },
  contact: {
    marginTop: 8,
    fontSize: 8.5,
    color: colors.muted,
  },
  contactLinks: {
    marginTop: 2,
    fontSize: 8.5,
  },
  link: {
    color: colors.primary,
    textDecoration: 'none',
  },
  section: {
    marginTop: 15,
  },
  sectionTitle: {
    marginBottom: 8,
    paddingBottom: 3,
    borderBottomWidth: 0.7,
    borderBottomColor: colors.divider,
    color: colors.primary,
    fontSize: 10.5,
    fontFamily: 'Helvetica-Bold',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  summary: {
    fontSize: 9.5,
    lineHeight: 1.45,
  },
  experience: {
    marginBottom: 11,
  },
  experienceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
  },
  role: {
    maxWidth: '68%',
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  date: {
    fontSize: 8.5,
    color: colors.muted,
  },
  company: {
    marginTop: 1,
    marginBottom: 4,
    fontSize: 9,
    color: colors.muted,
  },
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
  },
  bullet: {
    width: 10,
    color: colors.primary,
    fontFamily: 'Helvetica-Bold',
  },
  bulletText: {
    flex: 1,
  },
  skillRow: {
    marginBottom: 7,
  },
  skillLabel: {
    fontFamily: 'Helvetica-Bold',
  },
  educationTitle: {
    fontSize: 10,
    fontFamily: 'Helvetica-Bold',
  },
  meta: {
    marginTop: 2,
    color: colors.muted,
    fontSize: 8.8,
  },
  course: {
    marginBottom: 7,
  },
  courseName: {
    fontFamily: 'Helvetica-Bold',
  },
  language: {
    marginBottom: 5,
  },
  note: {
    marginTop: 18,
    padding: 9,
    backgroundColor: colors.soft,
    color: colors.muted,
    fontSize: 8.2,
  },
});

function Section({ title, children }) {
  return <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>;
}

function Bullet({ children }) {
  return <View style={styles.bulletRow}>
    <Text style={styles.bullet}>•</Text>
    <Text style={styles.bulletText}>{children}</Text>
  </View>;
}

function ResumeHeader() {
  return <View style={styles.header}>
    <Text style={styles.name}>{profile.name}</Text>
    <Text style={styles.headline}>{profile.headline}</Text>
    <Text style={styles.contact}>{profile.location} | {profile.phone} | {profile.email}</Text>
    <Text style={styles.contactLinks}>
      <Link src={profile.linkedinUrl} style={styles.link}>{profile.linkedin}</Link>
      {' | '}
      <Link src={profile.githubUrl} style={styles.link}>{profile.github}</Link>
      {' | '}
      <Link src={profile.websiteUrl} style={styles.link}>{profile.website}</Link>
    </Text>
  </View>;
}

function Experience({ experience }) {
  return <View style={styles.experience} wrap={false}>
    <View style={styles.experienceHeader}>
      <Text style={styles.role}>{experience.title}</Text>
      <Text style={styles.date}>{experience.date}</Text>
    </View>
    <Text style={styles.company}>{experience.companyName} | {experience.workMode}</Text>
    {experience.highlights
      .filter(({ showOnPdf }) => showOnPdf)
      .map(({ text }) => <Bullet key={text}>{text}</Bullet>)}
  </View>;
}

export function ResumeDocument() {
  return <Document
    title={`Currículo - ${profile.name}`}
    author={profile.name}
    subject="Currículo profissional para oportunidades de Desenvolvimento Back-End"
    keywords="Desenvolvedor Back-End, Go, Golang, microsserviços, APIs REST, Redis, Elasticsearch, SQL, MongoDB, Datadog"
    language="pt-BR"
  >
    <Page size="A4" style={styles.page}>
      <ResumeHeader />

      <Section title="Resumo Profissional">
        <Text style={styles.summary}>{professionalSummary.join(' ')}</Text>
      </Section>

      <Section title="Experiência Profissional">
        {experiences.map((experience) => <Experience experience={experience} key={`${experience.title}-${experience.date}`} />)}
      </Section>
    </Page>

    <Page size="A4" style={styles.page}>
      <Section title="Competências Técnicas">
        {resumeSkillGroups.map(([label, skills]) => <Text style={styles.skillRow} key={label}>
          <Text style={styles.skillLabel}>{label}: </Text>{skills}
        </Text>)}
      </Section>

      <Section title="Formação Acadêmica">
        <Text style={styles.educationTitle}>{education.degree}</Text>
        <Text style={styles.meta}>{education.institution} | {education.period}</Text>
      </Section>

      <Section title="Últimos Cursos e Certificações">
        {courses.map((course) => <View style={styles.course} key={course.name} wrap={false}>
          <Text>
            <Link src={course.url} style={[styles.link, styles.courseName]}>{course.name}</Link>
            {` — ${course.provider}, ${course.year}${course.duration ? ` (${course.duration})` : ''}`}
          </Text>
        </View>)}
      </Section>

      <Section title="Idiomas">
        {languages.filter((language) => language.showOnPdf !== false).map((language) => <Text style={styles.language} key={language.name}>
          <Text style={styles.skillLabel}>{language.name}: </Text>{language.level}
        </Text>)}
      </Section>

      <Text style={styles.note}>Portfólio, certificados e informações complementares disponíveis nos links do cabeçalho.</Text>
    </Page>
  </Document>;
}

export async function downloadResumePdf() {
  const blob = await pdf(<ResumeDocument />).toBlob();
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement('a');
  anchor.href = url;
  anchor.download = 'curriculo-kaue-bertaze.pdf';
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
}

export default ResumeDocument;
