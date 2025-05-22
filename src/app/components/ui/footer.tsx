import ShowPostComposer from "../task/show-post-composer";

export default function Footer() {

  return (
    <>
      <div className="flex items-center justify-between w-full px-10 py-3 ">
        <div className="flex items-center gap-6 text-white">
          Boton de cambio de tema
        </div>

        <ShowPostComposer />
      </div>
    </>
  )
}