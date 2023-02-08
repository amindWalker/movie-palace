#![allow(non_snake_case)]

use dioxus::prelude::*;

fn main() {
    dioxus_web::launch(App);
}

fn App(cx: Scope) -> Element {
    dotenvy::dotenv().ok().expect(".env file and variables not found");

    let interval_started = use_state(cx, || false);
    let state = use_state(cx, || 0);

    if !interval_started.get() {
        interval_started.set(true);
        let state = state.clone();
        gloo_timers::callback::Interval::new(1_000, move || {
            state.with_mut(|s| *s+=1);
        }).forget();
    }

    cx.render(rsx! {
        main {
            class: "@apply bg-gradient-to-t from-light-50 to-light-900 h-screen",
            div {
                class: "grid grid-flow-row",
                nav {
                    class: "grid grid-flow-row border border-red",
                    menu {
                        class: "flex bg-red",
                        a {class: "p4 m4 mx8 md:mx16 bg-orange text-white rounded drop-shadow", "LOGOTYPE"}
                        a {class: "p4 m4 bg-red text-white rounded drop-shadow", "MENU 1"}
                        a {class: "p4 m4 bg-red text-white rounded drop-shadow", "MENU 2"}
                    }
                }
                section {
                    class: "grid grid-flow-col shadow-inner shadow-red-800 bg-blue h-full",
                    aside {class: "col-span-1 border", "SIDE PANEL"}
                    article {class: "col-span-5", "CONTENT"}
                }
            }
        }
    })
}