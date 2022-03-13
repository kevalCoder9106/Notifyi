import './NoteSlot.css'

const NoteSlot = (props) => {
    const noteContent = {id:props.id,title:props.title,desc:props.desc,sub_desc:props.sub_desc}

    return(
        <div className='noteslot-container' onClick={() => props.onModifyingNote(noteContent.id,noteContent.title,noteContent.desc,noteContent.sub_desc)}>
            <h3 className='font-mono'>Title: {noteContent.title}</h3>
            <h4 className='font-mono'>Content: {noteContent.sub_desc}...</h4>
        </div>
    )
}

export default NoteSlot