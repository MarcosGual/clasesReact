import ItemLista from "./ItemLista";

const Lista = () => {
    let listaProductos = [
        {
            id: 1,
            nombre: 'leche',
            precio: 500,
            stock: 20
        },
        {
            id: 2,
            nombre: 'harina',
            precio: 400,
            stock: 20
        },
        {
            id: 3,
            nombre: 'yerba',
            precio: 1500,
            stock: 0
        }
    ];

    return (
        <>
            <h3>Lista de saludos</h3>
            <ul>
                {listaProductos.map((itemLista) => <ItemLista key={itemLista.id} producto={itemLista} />)}
            </ul>
        </>
    )
}

export default Lista;