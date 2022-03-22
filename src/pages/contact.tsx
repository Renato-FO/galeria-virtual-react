import { NextPage } from "next";



const Contact: NextPage = () => {
    return (
        <div>
            <div className="flex items-center justify-center w-full">
                <div className="text-center mt-40 px-20">
                    <h1 className="text-7xl font-semibold">Fale comigo!</h1>
                <div className="text-left mt-16 space-y-8">
                    <div>
                        <label className="text-left" htmlFor="name">Seu nome</label>
                        <input id="name" type="text" className="border-2 border-black h-12 w-full" />
                    </div>
                    <div>
                        <label className="text-left" htmlFor="name">Seu e-mail</label>
                        <input id="name" type="text" className="border-2 border-black h-12 w-full" />
                    </div> 
                    <div>
                        <label className="text-left" htmlFor="name">Sua mensagem</label>
                        <textarea className="w-full border-2 border-black" name="message" id="message" cols={30} rows={10}></textarea>    
                    </div>                   
                </div>
                <div className="w-full flex items-center justify-end">
                    <button className="h-12 bg-primary hover:bg-terciary-blue px-8 rounded-lg shadow-2xl text-white ml-auto">Enviar</button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Contact