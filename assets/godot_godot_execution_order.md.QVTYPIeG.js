import{_ as i,E as s,o as e,c as n,b as o,w as t,J as d,a as _,aG as l,m as a}from"./chunks/framework.wAHZtWZV.js";const T=JSON.parse('{"title":"Godot生命周期","description":"生命周期","frontmatter":{"date":"2024-01-27T23:58:22.000Z","title":"Godot生命周期","tag":["Godot"],"description":"生命周期"},"headers":[],"relativePath":"godot/godot_execution_order.md","filePath":"godot/godot_execution_order.md","lastUpdated":1706399343000}'),c={name:"godot/godot_execution_order.md"},A=a("h1",{id:"godot生命周期",tabindex:"-1"},[_("Godot生命周期 "),a("a",{class:"header-anchor",href:"#godot生命周期","aria-label":'Permalink to "Godot生命周期"'},"​")],-1);function E(f,p,g,D,x,B){const r=s("Mermaid");return e(),n("div",null,[A,(e(),o(l,null,{default:t(()=>[d(r,{id:"mermaid-3",graph:"stateDiagram-v2%0A%20%20%20%20%5B*%5D%20--%3E%20Initialization%20%0A%20%20%20%20Initialization%20--%3E%20EnterTree%20%20%0A%20%20%20%20EnterTree%20--%3E%20Ready%0A%20%20%20%20Ready%20--%3E%20Input%0A%20%20%20%20Input%20--%3E%20Process%0A%20%20%20%20Process%20--%3E%20ExitTree%0A%20%20%20%20ExitTree%20--%3E%20%5B*%5D%0A%20%20%20%20state%20Initialization%20%20%7B%0A%20%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20_static_init%0A%20%20%20%20%20%20%20%20%20_static_init%20--%3E%20_init%0A%20%20%20%20%20%20%20%20%20_init%20--%3E%20_notification_init%0A%20%20%20%20%20%20%20%20%20_notification_init%20--%3E%20%5B*%5D%0A%20%20%20%20%20%20%20%20state%20%22Notification%22%20as%20_notification_init%20%7B%0A%20%20%20%20%20%20%20%20NOTIFICATION_SCENE_INSTANTIATED(20)%20%20--%3E%20NOTIFICATION_PARENTED(18)%0A%20%20%20%20%20%20%20%20%7D%20%0A%20%20%20%20%7D%0A%20%20%20%0A%20%20%20%20state%20EnterTree%20%7B%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20_enter_tree%0A%20%20%20%20%20%20%20%20_enter_tree%20--%3E%20tree_entered%0A%20%20%20%20%20%20%20%20tree_entered%20--%3E%20_notification_tree_enter%0A%20%20%20%20%20%20%20%20_notification_tree_enter%20--%3E%20%5B*%5D%0A%20%20%20%20%20%20%20%20state%20%22tree_entered%20%20Signal%22%20as%20signal_tree_entered%20%0A%20%20%20%20%20%20%20%20state%20%22Notification%22%20as%20_notification_tree_enter%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20NOTIFICATION_POST_ENTER_TREE(27)%0A%20%20%20%20%20%20%20%20%7D%20%0A%20%20%20%20%7D%0A%20%20%20%20state%20Ready%20%7B%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20_ready%0A%20%20%20%20%20%20%20%20_ready%20--%3E%20signal_ready%0A%20%20%20%20%20%20%20%20signal_ready%20--%3E%20%5B*%5D%0A%20%20%20%20%20%20%20%20%20state%20%22ready%20Signal%22%20as%20signal_ready%20%0A%20%20%20%20%7D%0A%20%20%20%20state%20Input%20%7B%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20_input%0A%20%20%20%20%20%20%20%20_input%20--%3E%20_unhandled_input%0A%20%20%20%20%20%20%20%20_unhandled_input%20--%3E%20_unhandled_key_input%0A%20%20%20%20%20%20%20%20_unhandled_key_input%20--%3E%20%5B*%5D%0A%20%20%20%20%7D%0A%20%20%20%20state%20Process%20%7B%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20signal_physics_frame%0A%20%20%20%20%20%20%20%20signal_physics_frame%20--%3E%20_physics_process%0A%20%20%20%20%20%20%20%20_physics_process%20--%3E%20call_deferred_process%0A%20%20%20%20%20%20%20%20call_deferred_process%20--%3E%20signal_process_frame%0A%20%20%20%20%20%20%20%20signal_process_frame%20--%3E%20_process%0A%20%20%20%20%20%20%20%20_process%20--%3E%20_process_call_deferred%0A%20%20%20%20%20%20%20%20_process_call_deferred%20--%3E%20%5B*%5D%0A%20%20%20%20%20%20%20%20state%20%22Call%20Deferred%22%20as%20call_deferred_process%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%20%22_init.call_deferred%22%20as%20_init_call_deferred%0A%20%20%20%20%20%20%20%20%20%20%20%20until%0A%20%20%20%20%20%20%20%20%20%20%20%20state%20%22_physics_process.call_deferred%22%20as%20_physics_process_call_deferred%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20state%20%22_process.call_deferred%22%20as%20_process_call_deferred%0A%20%20%20%20%20%20%20%20state%20%22get_tree().physics_frame%20Signal%22%20as%20signal_physics_frame%0A%20%20%20%20%20%20%20%20state%20%22get_tree().process_frame%20Signal%22%20as%20signal_process_frame%0A%20%20%20%20%7D%0A%20%20%20%20state%20ExitTree%20%7B%0A%20%20%20%20%20%20%20%20%5B*%5D%20--%3E%20_exit_tree%0A%20%20%20%20%20%20%20%20_exit_tree%20--%3E%20signal_tree_exiting%0A%20%20%20%20%20%20%20%20signal_tree_exiting%20--%3E%20signal_tree_exited%0A%20%20%20%20%20%20%20%20signal_tree_exited%20--%3E%20_notification_tree_exit%0A%20%20%20%20%20%20%20%20_notification_tree_exit%20--%3E%20%20call_deferred_tree_exit%0A%20%20%20%20%20%20%20%20call_deferred_tree_exit%20--%3E%20%5B*%5D%0A%20%20%20%20%20%20%20%20state%20%22tree_exiting%20Signal%22%20as%20signal_tree_exiting%0A%20%20%20%20%20%20%20%20state%20%22tree_exited%20Signal%22%20as%20signal_tree_exited%20%0A%20%20%20%20%20%20%20%20state%20%22Notification%22%20as%20_notification_tree_exit%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20NOTIFICATION_PREDELETE(1)%0A%20%20%20%20%20%20%20%20%7D%20%0A%20%20%20%20%20%20%20%20state%20%22Call%20Deferred%22%20as%20call_deferred_tree_exit%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20state%20%22_exit_tree.call_deferred%22%20as%20_exit_tree_call_deferred%0A%20%20%20%20%20%20%20%20%20%20%20%20until%0A%20%20%20%20%20%20%20%20%20%20%20%20state%20%22NOTIFICATION_PREDELETE.call_deferred%22%20as%20_notification_predelete_call_deferred%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A"})]),fallback:t(()=>[_(" Loading... ")]),_:1}))])}const m=i(c,[["render",E]]);export{T as __pageData,m as default};
