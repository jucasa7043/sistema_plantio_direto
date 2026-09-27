import Image from 'next/image'
import { getTranslations } from 'next-intl/server'
import CourseModal from '@/components/Hero/CourseModal'
import { Modulo } from '@/types'
import styles from './Curso.module.css'
import folha from '@/public/curso-folha.webp'

export default async function Curso({ modulos }: { modulos: Modulo[] }) {
  const t = await getTranslations('curso')

  return (
    <section id="curso" className={styles.band} aria-labelledby="curso-title">
      <div className={`wrap ${styles.inner}`}>
        <Image src={folha} alt="" sizes="120px" className={styles.art} />
        <div className={styles.copy}>
          <div className="eyebrow">{t('tag')}</div>
          <h2 id="curso-title" className={styles.title}>{t('title')}</h2>
          <p className={styles.text}>{t('text')}</p>
        </div>
        <CourseModal modulos={modulos} label={t('cta')} className={`btn-line ${styles.btn}`} />
      </div>
    </section>
  )
}
