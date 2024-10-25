import Image from 'next/image';
import logoImage from "@/public/logo.png"


function renderLogo(): JSX.Element {
  return <Image src={logoImage} alt="Tu logo" />;
} 

function MyComponent() {
  return (
    <div>
      <h1>Mi Aplicación</h1>
      {renderLogo()} 
    </div>
  );
}

export default MyComponent;