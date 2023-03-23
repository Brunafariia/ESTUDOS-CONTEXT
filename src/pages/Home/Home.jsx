import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./Home.css";

export function Home() {
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  return (
    <div className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
      <h1>Home</h1>
      <p className="m-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui cupiditate labore quidem iure? Temporibus, beatae vero assumenda vitae dolor illum. Illum neque aspernatur consequuntur eos ad enim error magnam ex maiores? Quam reprehenderit quae repudiandae hic quibusdam blanditiis at exercitationem tenetur fuga perferendis eaque ipsam mollitia porro provident voluptatem earum illum dicta velit voluptatum, illo deleniti! Commodi rerum provident dolor enim? Esse accusantium deleniti quasi dolorem nisi obcaecati quibusdam beatae incidunt corporis numquam voluptatibus voluptates pariatur in sunt labore minus dignissimos commodi, repellat enim consequatur assumenda? Facere aut molestias cum cumque commodi blanditiis odit ratione modi dicta est perspiciatis magnam, sint quod alias sit perferendis? Ad ea quos earum quisquam tempora debitis vitae dicta neque quasi impedit beatae voluptatibus voluptate dolores expedita, laudantium labore voluptates perspiciatis iste blanditiis, quam nihil? Voluptas, non nostrum. Dignissimos fugit, est excepturi vitae dolores ex voluptatem adipisci vero eveniet. Eaque sit ipsam assumenda incidunt ab tempora aperiam impedit asperiores culpa enim eos consectetur voluptate quod vitae consequatur, cupiditate nemo vero veritatis dolor. Porro optio voluptas non! Iste, similique! Vero eius deleniti rem est praesentium harum enim fugiat minus aspernatur voluptatum alias molestiae reprehenderit tempore, facere hic pariatur cupiditate porro ex? Nisi ut distinctio vel quae iure pariatur deleniti, libero hic corporis culpa voluptas aspernatur quisquam reiciendis tempora! Beatae iusto eius nam aut modi voluptas autem alias ullam? Nobis ea iure quasi at omnis dolorem voluptatum ex pariatur, quas eum minima doloremque voluptate labore consectetur, obcaecati iste deserunt ipsa! Dolorum architecto voluptas ipsa magni odit beatae corrupti quo voluptatum commodi quae aliquam tempore, doloremque quaerat rerum eaque eius eligendi sit vel. Mollitia ipsa pariatur, necessitatibus aliquid eaque minima libero inventore quibusdam tempore. Necessitatibus aut hic autem recusandae harum quod facilis quibusdam, ducimus possimus quis id voluptatibus cupiditate laboriosam totam nesciunt quaerat, voluptate minus! Repellendus, ipsum. Voluptas.</p>
    </div>
  );
}
