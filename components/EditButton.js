import { useCMS } from 'tinacms'

export const EditButton = () => {
    const cms = useCMS()

    return (<>
        <button onClick={() => cms.toggle()}>
            {cms.enabled ? 'Exit Edit Mode' : 'Edit This Site'}
        </button>
        <style jsx>{`
            button {
                font-family: inherit;
                font-size: 1.2rem;
                padding: .7em 1.3em;
                background: hsl(190deg, 30%, 20%);
                color: white;
                border: none;
            }
        `}</style>
    </>)
}

export default EditButton