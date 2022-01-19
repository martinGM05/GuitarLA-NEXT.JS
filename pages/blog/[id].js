const EntradaBlog = ({entrada}) => {

    return (
        <div>
            <h1>Desde entrada blog</h1>
        </div>
    );
};

export async function getStaticPaths(){
    const url = `${process.env.API_URL}/blogs`;
    const respuesta = await fetch(url);
    const entradas = await respuesta.json();

    const paths = entradas.map(entrada => ({
        params: {
            id: entrada.id.toString()
        }
    }));

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({params: {id}}) {

    const url = `${process.env.API_URL}/blogs/${id}`;
    console.log(url);
    const respuesta = await fetch(url);
    const entrada = await respuesta.json()

    return {
        props: {
            entrada
        }
    }
}

// export async function getServerSideProps({query: {id}}) {

//     const url = `${process.env.API_URL}/blogs/${id}`;
//     console.log(url);
//     const respuesta = await fetch(url);
//     const entrada = await respuesta.json()

//     return {
//         props: {
//             entrada
//         }
//     }
// }


export default EntradaBlog;
