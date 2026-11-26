import { create } from "zustand";

// creamos el almacen de la canasta
const useCarritoStore = create((set) => ({

    // aqui guardamos los productos agregados
    carrito: [],

    // agregamos un producto a la canasta
    agregarProducto: (producto) => set((state) => {

        // revisamos si el producto ya existe
        const existe = state.carrito.find(
            (item) => item.id === producto.id
        );

        // si ya existe aumentamos sus unidades
        if (existe) {
            return {
                carrito: state.carrito.map((item) =>
                    item.id === producto.id
                        ? { ...item, cantidad: item.cantidad + 1 }
                        : item
                )
            };
        } else {

            // si no existe lo agregamos con una unidad
            return {
                carrito: [
                    ...state.carrito,
                    { ...producto, cantidad: 1 }
                ]
            };
        }
    }),

    // aumentamos las unidades de un producto
    sumarUnidades: (id) => set((state) => ({
        carrito: state.carrito.map((item) =>
            item.id === id
                ? { ...item, cantidad: item.cantidad + 1 }
                : item
        )
    })),

    // restamos una unidad y quitamos el producto si llega a cero
    restarUnidades: (id) => set((state) => ({
        carrito: state.carrito
            .map((item) =>
                item.id === id
                    ? { ...item, cantidad: item.cantidad - 1 }
                    : item
            )
            .filter((item) => item.cantidad > 0)
    })),

    // eliminamos un producto de la canasta
    eliminarProducto: (id) => set((state) => ({
        carrito: state.carrito.filter((item) => item.id !== id)
    })),

    // vaciamos todos los productos de la canasta
    vaciarCarrito: () => set({
        carrito: []
    })

}));


export default useCarritoStore;
