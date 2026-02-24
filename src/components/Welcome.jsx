import { Highlighter } from '../components/highlighter'
const Welcome = () => {
  return (
    <div className="min-h-screen pt-32 px-4 sm:px-10">
        <section>
            The{" "}
            <Highlighter action="underline" color="#FF9800">
                Magic UI Highlighter
            </Highlighter>{" "}
            makes important{" "}
            <Highlighter action="highlight" color="#87CEFA">
                text stand out
            </Highlighter>{" "}
            effortlessly.
            </section>
    </div>
  )
}

export default Welcome