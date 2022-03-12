import styles from './styles.module.scss';

export default function Support() {
    return (
        <>
            <div className="animate__animated animate__backInLeft">
                <div className={styles.Support}>
                    <div className={styles.Title}>
                        <h4>Você precisa de ajuda?</h4>
                        <p>
                            Nossa equipe especializada está disponível a qualquer momento para
                            retirar
                            <br />
                            suas dúvidas, demoramos em média 10 minutos para responder o seu ticket.
                            <br /> Se tiver dúvidas não hesite em retirá-las.
                        </p>
                    </div>
                    <button>Abrir um chamado</button>
                </div>
            </div>
        </>
    );
}
