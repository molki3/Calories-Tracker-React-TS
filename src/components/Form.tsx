import categories from "../data/categories"


const Form = () => {
  return (
    <>
        <form 
            className="space-y-5 bg-white shadow-md p-10 rounded-lg"
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Categoria:</label>
                <select id="category" className="border border-slate-300 p-2 rounded-lg bg-white">
                    {categories.map(category => (
                        <option key={category.id} value={category.id}>{category.name}</option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Actividad:</label>
                <input 
                    type="text" 
                    id="activity"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. Ensalada, Jugo de naranja, Pesas, Running"
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="activity" className="font-bold">Calorias:</label>
                <input 
                    type="number" 
                    id="calories"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Ej. 300, 500, 200"
                />
            </div>
        </form>
    </>
  )
}

export default Form