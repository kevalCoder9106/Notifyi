import './Home.css'
import Page from './Page/Page'
import NoteSlot from './NoteSlot/NoteSlot'
import { useState } from 'react'

const Home = (props) => {
    const [isCreatingNote,setCreatingNote] = useState(false)

    // this is for when user will click on already existed note
    const [id,updateID] = useState(0)
    const [title,updateTitle] = useState('')
    const [desc,updateDesc] = useState('')
    const [sub_desc,updateSubDesc] = useState('')

    const onCreateNote = () => {
        if (title !== '' || title !== ' '){
            const newNote = {
                id:Math.floor(Math.random() * (9999 - 1000) + 1000),
                title: title,
                desc: desc,
                sub_desc: desc.substring(0,(desc.length <= 5 ? 5 : desc.length / 2))
            }
            
            props.addNote(newNote.id,newNote.title,newNote.desc,newNote.sub_desc)
            setCreatingNote(false)
        }
    }

    const sub_onCommitNote = () => {
        props.onCommitNote(id,title,desc,sub_desc)
    }

    const onModifyingNote = (id,title,desc,sub_desc) => {
        document.getElementById('title_tbox').value = title
        updateID(id)
        updateTitle(title)
        updateDesc(desc)
        updateSubDesc(sub_desc)
        setCreatingNote(true)
    }

    return(
        <div className='home-container background'>
            <header className='header'>
                <h2 className='font-cursive'>Notifyi</h2>
                <h4><a href='#0' className='link font-mono' onClick={props.resetUserCreds}>Sign out</a></h4>
            </header>
            <div className='home-field-container'>
                <input id='title_tbox' type='text' placeholder='Title' className='font-mono' onChange={e => updateTitle(e.target.value)} onFocus={() => setCreatingNote(true)} defaultValue={title}></input>
                <button className='font-mono' onClick={onCreateNote}>Create</button>
            </div>
            {
                // if user is going to create new note then instantiate page
                isCreatingNote === true
                ?
                    <Page setCreatingNote={setCreatingNote} title={title} desc={desc} updateDesc={updateDesc} updateSubDesc={updateSubDesc} onCommitNote={sub_onCommitNote}/>
                :
                    <div className='note-container'>
                        {/* <NoteSlot id={note_data[0].id} title={note_data[0].title} desc={note_data[0].desc}/> */}
                        {
                            props.notes.length > 0
                            ?
                                props.notes.map(d =>  <NoteSlot id={d.id} title={d.title} desc={d.desc} sub_desc={d.sub_desc} onModifyingNote={onModifyingNote}/> )
                            :
                                console.log()
                        }
                    </div>
            }
        </div>
    )
}

export default Home