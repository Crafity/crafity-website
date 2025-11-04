import styles from './page-container.module.css'

export function PageContainer({ children }: { children: React.ReactNode }) {
  return <div className={styles['page-container']}>{children}</div>
}
