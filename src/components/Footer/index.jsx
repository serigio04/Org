import "./Footer.css"

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/serigio04' target="blank">
                <img id="github" src="\img\github.png" alt='Facebook' />
            </a>
            <a href='https://www.linkedin.com/in/sergio-gomar/' target="blank">
                <img id="linkedin" src="https://cdn-icons-png.flaticon.com/512/61/61109.png" alt='Linkedin'/>
            </a>
            <a href='https://www.instagram.com/s__.gb/' target="blank">
                <img src="/img/instagram.png" alt='instagram' />
            </a>
        </div>
        <img src='https://github.com/alura-es-cursos/1950-react-desarrollando-con-js/blob/clase07/public/img/Logo.png?raw=true' alt='org' />
        <strong>Desarrollado por Sergio Gomar</strong>
    </footer>

}

export default Footer 