import {useState, useEffect, useEffectEvent} from "react"
// {
//     heading:"string",
//     subheading: "string",
    //    ctaText: "string",
    // updatedAt: Date
// }



const HeroEditor = () => {
    const [form, setForm] = useState({
        heading:"",
        subheading:"",
        ctaText:""
    });


    useEffect(()=>{
        const saved = localStorage.getItem("Hero");
        if (saved){
            setForm(JSON.parse(saved));

        };
    },[])


    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };


    const handleSave = () => {
        localStorage.setItem("hero", JSON.stringify(form));
        alert("Hero Content Saved!")
    }




    return (
        <div className="p-6 max-w-xl">
            <h2 className="text-xl font-semibold mb-4">
                Edit Hero Section
            </h2>
            <input 
            name="heading"
            value={form.heading}
            onChange={handleChange}
            placeholder="Heading"
            className="block w-full mb-3 border p-2"
            />
            <input 
            name="subheading"
            value={form.subheading}
            onChange={handleChange}
            placeholder="Subheading"
            className="block w-full mb-3 border p-2"
            />

            <input 
            name="ctaText"
            value={form.ctaText}
            onChange={handleChange}
            placeholder="ctaText"
            className="block w-full mb-3 border p-2"
            />

            <button
            onClick={handleSave}
            className="bg-blue-600 text-white px-4 py-2 rounded"
            >
                Save
            </button>
        </div>
    )
}
export default HeroEditor