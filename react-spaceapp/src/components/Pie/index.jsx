import { styled } from 'styled-components';
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";

const PieEstilizado = styled.footer`
	display: flex;
    flex-direction: column;
    align-items: center;
	width: 100%;
	margin-top: 100px;
	background-color: #04244F;
    
    // container
    div{
        display: flex;
        justify-content: space-between;
        padding: 32px 22px;
        width: 100%;
        max-width: 1280px;
        @media (max-width: 768px) {
            flex-direction: column;
            align-items: center;
            gap: 20px
        }
    }
`;

const IconoContainer = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
	li {
    	display: inline-block;
    	margin: 0 16px;
	}
    a{
        font-size: 18px;
        color: white;
    }
    a:hover{
        color: #1DA1F2;
        transition: color 0.3s ease;
    }
`;

const PieTexto = styled.p`
	font-size: 16px;
	color: white;
	margin: 0;
`;

export const Pie = () => {
    return (
        <PieEstilizado>
            <div>
                <IconoContainer>
                    <li>
                        <a href="https://romanrios.github.io/" target="_blank">
                            <FaGlobe />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/romanrios/#" target="_blank">
                            <FaLinkedin />
                        </a>
                    </li>
                    <li>
                        <a href="https://github.com/romanrios" target="_blank">
                            <FaGithub />
                        </a>
                    </li>
                </IconoContainer>
                <PieTexto>Desarrollado por Román Ríos.</PieTexto>
            </div>
        </PieEstilizado>
    );
}