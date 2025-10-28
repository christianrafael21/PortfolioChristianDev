import styles from './page.module.css'
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaPhone,
  FaPython,
  FaJava,
  FaReact,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPhp,
  FaJs,
  FaDatabase,
  FaCode,
  FaServer,
  FaCogs
} from 'react-icons/fa'
import { SiDjango, SiTypescript, SiNextdotjs, SiPostgresql, SiMysql } from 'react-icons/si'

export default function Home() {
  const skills = {
    languages: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'JavaScript', icon: FaJs },
      { name: 'PHP', icon: FaPhp },
    ],
    frameworks: [
      { name: 'Django', icon: SiDjango },
      { name: 'Spring Boot', icon: FaServer },
      { name: 'React', icon: FaReact },
      { name: 'Next.js', icon: SiNextdotjs },
    ],
    databases: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
      { name: 'Oracle', icon: FaDatabase },
    ],
    tools: [
      { name: 'Docker', icon: FaDocker },
      { name: 'AWS', icon: FaCogs },
      { name: 'Git', icon: FaGitAlt },
      { name: 'Linux', icon: FaLinux },
    ],
  }

  const experiences = [
    {
      company: 'TiastraSoft Soluções em Tecnologia',
      role: 'Desenvolvedor Full Stack (PJ)',
      period: '2025 – Atual',
      description: 'Desenvolvimento de soluções completas desde arquitetura até deploy. Trabalho com Django, React, TypeScript, Next.js, Docker, GitLab CI/CD, Datadog e AWS.',
      highlights: ['CopQuest - Software de Segurança do Trabalho (NR-01)', 'APIs REST', 'SOLID & Design Patterns']
    },
    {
      company: 'Thomson Reuters Brasil',
      role: 'Estagiário de Desenvolvimento de Software',
      period: '2024 – Atual',
      description: 'Desenvolvimento e manutenção de sistemas corporativos ONESOURCE Tax One para gestão tributária e automação fiscal.',
      highlights: ['Java (Spring Boot)', 'Angular', 'Oracle', 'Azure DevOps', 'Datadog']
    },
    {
      company: 'Grupo VOCÊ - Medicina e Segurança do Trabalho',
      role: 'Estagiário de Desenvolvimento de Software',
      period: '2023 – 2024',
      description: 'Desenvolvimento do sistema ICARUS Ocupacional com PHP, JavaScript e Yii Framework.',
      highlights: ['PostgreSQL', 'Linux', 'Yii Framework']
    },
    {
      company: 'UFJF',
      role: 'Bolsista em Treinamento Profissional Acadêmico',
      period: '2023 – 2024',
      description: 'Projeto de análise e gestão de dados hospitalares, com foco em modelagem de banco de dados e tomada de decisão baseada em dados.',
      highlights: ['Análise de Dados', 'Modelagem de BD']
    },
    {
      company: 'UFJF',
      role: 'Bolsista em Projeto de Extensão',
      period: '2022 – 2023',
      description: 'Desenvolvimento de aplicativo móvel com gamificação e machine learning para intervenção no consumo de álcool.',
      highlights: ['React Native', 'Machine Learning', 'MySQL']
    },
  ]

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroImage}>
            <img src="/PortfolioChristianDev/profile.jpg" alt="Christian Rafael de Oliveira Coelho" />
          </div>
          <h1 className={styles.heroTitle}>
            Christian Rafael de Oliveira Coelho
          </h1>
          <h2 className={styles.heroSubtitle}>
            Desenvolvedor Júnior Full Stack
          </h2>
          <p className={styles.heroDescription}>
            Python • Django • TypeScript • React • Java • Next.js • APIs REST
          </p>
          <div className={styles.heroInfo}>
            <span><FaMapMarkerAlt /> Belo Horizonte e Juiz de Fora, MG</span>
            <span><FaPhone /> (32) 9 99914651</span>
            <span><FaEnvelope /> christianrafael102@gmail.com</span>
          </div>
          <div className={styles.heroButtons}>
            <a href="mailto:christianrafael102@gmail.com" className={styles.primaryButton}>
              Entre em Contato
            </a>
            <a href="/contact" className={styles.secondaryButton}>
              Ver Mais
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Sobre Mim</h2>
          <p className={styles.aboutText}>
            Desenvolvedor Júnior Full Stack com <strong>3 anos de experiência prática</strong> em desenvolvimento de software, 
            atuando em projetos corporativos, acadêmicos e industriais. Experiência sólida em backend e frontend, 
            com foco em desenvolvimento de <strong>APIs REST</strong>, <strong>microsserviços</strong> e interfaces modernas.
          </p>
          <p className={styles.aboutText}>
            No backend, trabalho com <strong>Python (Django)</strong> e <strong>Java (Spring Boot)</strong>, criando soluções 
            escaláveis e seguras. No frontend, atuo com <strong>React.js</strong>, <strong>TypeScript</strong> e <strong>Next.js</strong>, 
            desenvolvendo aplicações responsivas e performáticas.
          </p>
          <p className={styles.aboutText}>
            Aplico boas práticas de engenharia de software, como <strong>SOLID</strong>, <strong>Design Patterns</strong>, 
            testes automatizados, <strong>CI/CD</strong>, e monitoramento com <strong>Datadog</strong>. 
            Tenho familiaridade com <strong>Docker</strong>, <strong>DevOps</strong>, ambientes <strong>Linux</strong> e infraestrutura <strong>AWS</strong>.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section className={styles.section} style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Habilidades</h2>
          
          <div className={styles.skillsGrid}>
            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Linguagens</h3>
              <div className={styles.skillItems}>
                {skills.languages.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <skill.icon className={styles.skillIcon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Frameworks</h3>
              <div className={styles.skillItems}>
                {skills.frameworks.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <skill.icon className={styles.skillIcon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>Bancos de Dados</h3>
              <div className={styles.skillItems}>
                {skills.databases.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <skill.icon className={styles.skillIcon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.skillCategory}>
              <h3 className={styles.skillCategoryTitle}>DevOps & Ferramentas</h3>
              <div className={styles.skillItems}>
                {skills.tools.map((skill) => (
                  <div key={skill.name} className={styles.skillItem}>
                    <skill.icon className={styles.skillIcon} />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.additionalSkills}>
            <h3 className={styles.skillCategoryTitle}>Outras Competências</h3>
            <div className={styles.tags}>
              <span className={styles.tag}>APIs REST</span>
              <span className={styles.tag}>Microsserviços</span>
              <span className={styles.tag}>SOLID</span>
              <span className={styles.tag}>Design Patterns</span>
              <span className={styles.tag}>Testes Automatizados</span>
              <span className={styles.tag}>CI/CD</span>
              <span className={styles.tag}>GitLab CI</span>
              <span className={styles.tag}>Azure DevOps</span>
              <span className={styles.tag}>Datadog</span>
              <span className={styles.tag}>Scrum</span>
              <span className={styles.tag}>Kanban</span>
              <span className={styles.tag}>Inglês Técnico</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Experiência Profissional</h2>
          <div className={styles.timeline}>
            {experiences.map((exp, index) => (
              <div key={index} className={styles.timelineItem}>
                <div className={styles.timelineDot}></div>
                <div className={styles.timelineContent}>
                  <div className={styles.timelineHeader}>
                    <h3 className={styles.timelineTitle}>{exp.role}</h3>
                    <span className={styles.timelinePeriod}>{exp.period}</span>
                  </div>
                  <h4 className={styles.timelineCompany}>{exp.company}</h4>
                  <p className={styles.timelineDescription}>{exp.description}</p>
                  <div className={styles.timelineHighlights}>
                    {exp.highlights.map((highlight, i) => (
                      <span key={i} className={styles.highlight}>{highlight}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className={styles.section} style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Formação Acadêmica</h2>
          <div className={styles.educationGrid}>
            <div className={styles.educationCard}>
              <h3 className={styles.educationDegree}>Bacharelado em Ciência da Computação</h3>
              <p className={styles.educationInstitution}>Universidade Federal de Juiz de Fora (UFJF)</p>
              <p className={styles.educationPeriod}>Março de 2020 – 2025 (em andamento)</p>
            </div>
            <div className={styles.educationCard}>
              <h3 className={styles.educationDegree}>Bacharelado em Ciências Exatas</h3>
              <p className={styles.educationInstitution}>Universidade Federal de Juiz de Fora (UFJF)</p>
              <p className={styles.educationPeriod}>Março de 2020 – Julho 2025 (concluído)</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Projetos Desenvolvidos</h2>
          <div className={styles.projectsGrid}>
            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>CopQuest</h3>
                <span className={styles.projectYear}>2025</span>
              </div>
              <p className={styles.projectDescription}>
                Sistema completo de Segurança do Trabalho (NR-01) desenvolvido para gestão de SST. 
                Solução web moderna que auxilia empresas no cumprimento de normas regulamentadoras.
              </p>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>Django</span>
                <span className={styles.techTag}>React</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>Next.js</span>
                <span className={styles.techTag}>PostgreSQL</span>
                <span className={styles.techTag}>Docker</span>
              </div>
              <div className={styles.projectLinks}>
                <a href="https://copquest.com.br" target="_blank" rel="noopener noreferrer" className={styles.projectLink}>
                  Ver Projeto →
                </a>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>ICARUS Ocupacional</h3>
                <span className={styles.projectYear}>2023-2024</span>
              </div>
              <p className={styles.projectDescription}>
                Sistema de medicina e segurança do trabalho desenvolvido para o Grupo VOCÊ. 
                Plataforma completa para gestão de saúde ocupacional.
              </p>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>PHP</span>
                <span className={styles.techTag}>Yii Framework</span>
                <span className={styles.techTag}>JavaScript</span>
                <span className={styles.techTag}>PostgreSQL</span>
                <span className={styles.techTag}>Linux</span>
              </div>
            </div>

            <div className={styles.projectCard}>
              <div className={styles.projectHeader}>
                <h3 className={styles.projectTitle}>App de Intervenção em Saúde</h3>
                <span className={styles.projectYear}>2022-2023</span>
              </div>
              <p className={styles.projectDescription}>
                Aplicativo móvel com gamificação e machine learning para intervenção no consumo de álcool. 
                Projeto de extensão da UFJF com foco em saúde pública.
              </p>
              <div className={styles.projectTech}>
                <span className={styles.techTag}>React Native</span>
                <span className={styles.techTag}>TypeScript</span>
                <span className={styles.techTag}>Java</span>
                <span className={styles.techTag}>MySQL</span>
                <span className={styles.techTag}>ML</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Vamos Trabalhar Juntos?</h2>
          <p className={styles.ctaDescription}>
            Estou sempre aberto a novos desafios e oportunidades de colaboração.
          </p>
          <a href="/contact" className={styles.ctaButton}>
            Entre em Contato
          </a>
        </div>
      </section>
    </div>
  )
}
