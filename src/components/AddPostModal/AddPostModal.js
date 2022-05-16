import { useState } from 'react'
import style from './AddPostModal.module.css'
function AddPostModal({onSave,onCancel}){

    const [post,setPost] = useState({
        categoy:null,
        image:null,
        location:null,
        description:null,
        userId:12
    })
    const [errors,setErrors] = useState(null)

    const validate = (post)=>{
        const error = 'Todos los campos son obligatorios'
        if(!post.category){
            setErrors(error)
            throw Error(error)
        }
        if(!post.image){
            setErrors(error)
            throw Error(error)
        }
        if(!post.location){
            setErrors(error)
            throw Error(error)
        }
        if(!post.description){
            setErrors(error)
            throw Error(error)
        }
    }
    const handleSave = ()=>{
        validate(post)
        onSave(post)
    }
    return(
        <div className={style.container}>
            <div className={style.header}>
                <span>Nuevo post</span>
            </div>
            <div className={style.body}>
                <form>
                    <div className={style.input__group}>
                        <label>Categoria:</label>
                        <select name='category' onChange={(e)=>{setPost({...post,category:e.target.value})}}>
                            <option value={'claps'}>👏</option>
                            <option value={'dolphins'}>🐬</option>
                            <option value={'flutters'}>🦈</option>                            
                        </select>
                    </div>
                    <div className={style.input__group}>
                        <label>Imagen: </label>
                        <input name = 'image' type={'file'} onChange={(e)=>{setPost({...post,image:e.target.files})}}/>
                    </div>
                    <div className={style.input__group}>
                        <label>Localizacion: </label>
                        <input name='location' onChange={(e)=>{setPost({...post,location:e.target.value})}}/>
                    </div>
                    <div className={style.input__group}>
                        <label>Decripcion: </label>
                        <input name='description' onChange={(e)=>{setPost({...post,description:e.target.value})}}/>
                    </div>
                </form>
                {
                    errors&&
                    <p className={style.errors}>{errors}</p>
                }
            </div>
            <div className={style.footer}>
                <button onClick={handleSave}>Guardar</button>
                <button onClick={onCancel}>Cancelar</button>
            </div>
        </div>
    )
}

export default AddPostModal