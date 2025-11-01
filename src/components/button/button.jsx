import { A } from "@solidjs/router";
export function buttonMono(props) {
    return (
        <a class="btn text-sky-600 hover:underline" data-type="mono" href={props.href} >
            <div class="btn">
                {props.text}
            </div>
        </a>
    );
}