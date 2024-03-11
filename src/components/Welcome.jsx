const Welcome = ({ name, age }) => {
    return (
        <>
            <div className="welcome__div">
                {age > 17
                    ? `Bienvenido ${name}, gracias por usar nuestra aplicación`
                    : `Hola ${name}, eres muy joven para usar esta aplicación`}
            </div>
        </>
    );
};

export default Welcome;
