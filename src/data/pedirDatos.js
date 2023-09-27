import data from "./data.json"

export const pedirDatos = () => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(data)
            
        },500)
    })
}

export const pedirId = (id) => {
    return new Promise((resolve, reject) => {
        
        const item = data.find((elemento) => elemento.id === id);

        if (item) {
            resolve(item);
        } else {
            reject({
                error: "Error el producto no existe"
            })
        }

    })
}