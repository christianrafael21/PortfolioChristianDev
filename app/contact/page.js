import styles from './contact.module.css'
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const metadata = {
  title: 'Contato | Christian Coelho',
  description: 'Entre em contato com Christian Rafael de Oliveira Coelho',
}

export default function Contact() {
  const contactMethods = [
    {
      icon: FaEnvelope,
      title: 'Email',
      value: 'christianrafael102@gmail.com',
      link: 'mailto:christianrafael102@gmail.com',
      color: '#3b82f6'
    },
    {
      icon: FaPhone,
      title: 'Telefone',
      value: '(32) 9 99914651',
      link: 'tel:+5532999914651',
      color: '#10b981'
    },
    {
      icon: FaWhatsapp,
      title: 'WhatsApp',
      value: '(32) 9 99914651',
      link: 'https://wa.me/5532999914651',
      color: '#25d366'
    },
    {
      icon: FaMapMarkerAlt,
      title: 'Localização',
      value: 'Belo Horizonte e Juiz de Fora, MG',
      link: null,
      color: '#ef4444'
    },
  ]

  const socialLinks = [
    {
      icon: FaGithub,
      name: 'GitHub',
      username: '@christiancoelho',
      link: 'https://github.com/christianrafael21',
      color: '#ffffff'
    },
    {
      icon: FaLinkedin,
      name: 'LinkedIn',
      username: 'Christian Coelho',
      link: 'https://www.linkedin.com/in/christian-rafael-b63b691a4/',
      color: '#0077b5'
    },
  ]

  return (
    <div className={styles.container}>
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Vamos Conversar?</h1>
          <p className={styles.heroDescription}>
            Estou sempre aberto a novos desafios, oportunidades de colaboração e networking.
            Sinta-se à vontade para entrar em contato!
          </p>
        </div>
      </section>

      <section className={styles.contactSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Formas de Contato</h2>
          
          <div className={styles.contactGrid}>
            {contactMethods.map((method, index) => (
              <div key={index} className={styles.contactCard}>
                {method.link ? (
                  <a href={method.link} className={styles.contactLink}>
                    <div className={styles.contactIcon} style={{ backgroundColor: `${method.color}15`, color: method.color }}>
                      <method.icon />
                    </div>
                    <h3 className={styles.contactTitle}>{method.title}</h3>
                    <p className={styles.contactValue}>{method.value}</p>
                  </a>
                ) : (
                  <>
                    <div className={styles.contactIcon} style={{ backgroundColor: `${method.color}15`, color: method.color }}>
                      <method.icon />
                    </div>
                    <h3 className={styles.contactTitle}>{method.title}</h3>
                    <p className={styles.contactValue}>{method.value}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.socialSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Redes Sociais</h2>
          
          <div className={styles.socialGrid}>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialCard}
              >
                <div className={styles.socialIcon} style={{ backgroundColor: `${social.color}15`, color: social.color }}>
                  <social.icon />
                </div>
                <div className={styles.socialInfo}>
                  <h3 className={styles.socialName}>{social.name}</h3>
                  <p className={styles.socialUsername}>{social.username}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.infoSection}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Disponibilidade</h2>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Horário de Resposta</h3>
              <p className={styles.infoText}>
                Geralmente respondo em até 24 horas durante dias úteis.
              </p>
            </div>
            
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Tipo de Projetos</h3>
              <p className={styles.infoText}>
                Desenvolvimento Full Stack, APIs REST, aplicações web modernas, 
                consultoria técnica e projetos de longo prazo.
              </p>
            </div>
            
            <div className={styles.infoCard}>
              <h3 className={styles.infoTitle}>Regime de Trabalho</h3>
              <p className={styles.infoText}>
                Disponível para CLT, PJ, freela e projetos remotos.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>Pronto para começar?</h2>
          <p className={styles.ctaDescription}>
            Vamos transformar suas ideias em realidade. Entre em contato e vamos conversar!
          </p>
          <div className={styles.ctaButtons}>
            <a href="mailto:christianrafael102@gmail.com" className={styles.primaryButton}>
              <FaEnvelope /> Enviar Email
            </a>
            <a href="https://wa.me/5532999914651" className={styles.secondaryButton} target="_blank" rel="noopener noreferrer">
              <FaWhatsapp /> WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}
