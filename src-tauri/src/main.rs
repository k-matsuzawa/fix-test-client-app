#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use fix_api_lib::FixApiLibraryConfig;
use tauri::Manager;
use tauri_plugin_log::LogTarget;
pub mod app_manager;
use app_manager::{commands, AppManager};

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![
            commands::login,
            commands::logout,
            commands::get_price,
            commands::order
        ])
        .setup(|app| {
            log::info!(
                "resource_dir: {}",
                app.path_resolver()
                    .resource_dir()
                    .unwrap()
                    .to_str()
                    .unwrap()
            );
            log::info!(
                "app_data_dir: {}",
                app.path_resolver()
                    .app_data_dir()
                    .unwrap()
                    .to_str()
                    .unwrap()
            );
            //log::info!("app_local_data_dir: {}", app.path_resolver().app_local_data_dir().unwrap().to_str().unwrap());
            log::info!(
                "app_log_dir: {}",
                app.path_resolver().app_log_dir().unwrap().to_str().unwrap()
            );
            let mut state = AppManager::new();
            state.initialize(FixApiLibraryConfig {});
            app.manage(state);

            // Display devtools only during development.
            #[cfg(debug_assertions)]
            app.get_window("main").unwrap().open_devtools();
            Ok(())
        })
        .plugin(
            tauri_plugin_log::Builder::default()
                .targets([LogTarget::LogDir, LogTarget::Stdout, LogTarget::Webview])
                .build(),
        )
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
