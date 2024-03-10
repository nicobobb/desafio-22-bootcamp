const Welcome = ({ name, age }) => {
    return (
        <>
            {age > 17
                ? `Bienvenido ${name}, gracias por usar nuestra aplicación`
                : `Hola ${name}, eres muy joven para usar esta aplicación`}
        </>
    );
};

export default Welcome;
