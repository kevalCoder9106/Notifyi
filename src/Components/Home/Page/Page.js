import './Page.css'

const Page = (props) => { 

    const commitNote = () => {
        props.onCommitNote()
        props.setCreatingNote(false)
    }

    const updateDesc = (e) => {
        const desc = e.target.value
        const sub_desc = desc.substring(0,(desc.length <= 5 ? 5 : desc.length / 2))

        props.updateDesc(desc)
        props.updateSubDesc(sub_desc)
    }

    return(
        <div className='page-container'>
            <textarea className='font-mono' onChange={e => updateDesc(e)} placeholder='Content' defaultValue={props.desc}></textarea>
            <div className='bottom-area'>
                <button className='pos font-mono' onClick={commitNote}>Commit</button>
                <button className='neg font-mono' onClick={() => props.setCreatingNote(false)}>Back</button>
            </div>
        </div>
    )
} 

export default Page