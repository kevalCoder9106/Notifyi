import './Page.css'

const Page = (props) => { 

    const commitNote = () => {
        props.setCreatingNote(false)
        props.onCommitNote()
    }

    return(
        <div className='page-container'>
            <textarea className='font-mono' onChange={e => props.updateDesc(e.target.value)} placeholder='Content' defaultValue={props.desc}></textarea>
            <div className='bottom-area'>
                <button className='pos font-mono' onClick={commitNote}>Commit</button>
                <button className='neg font-mono' onClick={() => props.setCreatingNote(false)}>Back</button>
            </div>
        </div>
    )
} 

export default Page