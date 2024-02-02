#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use fix_api_lib::{FixApiLibrary, FixApiLibraryConfig, OrderRequest, LoginRequest};
use std::sync::Mutex;

// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command

pub struct AppManager {
    lib: Mutex<FixApiLibrary>,
}

impl AppManager {
    pub fn new() -> Self {
        Self {
            lib: Mutex::new(FixApiLibrary::new()),
        }
    }

    pub fn initialize(&mut self, config: FixApiLibraryConfig) {
        self.lib.lock().unwrap().initialize(config);
    }
}

pub mod commands {
    use super::*;
    use tauri::State;

    #[tauri::command]
    pub fn login(
        app_manager: State<'_, AppManager>,
		request: LoginRequest,
    ) -> Result<String, String> {
        log::trace!("call login");
        match app_manager.lib.lock().unwrap().login(&request) {
            Ok(ret) => {
                log::trace!("success login. {}", &ret);
                Ok(ret)
            }
            Err(err) => {
                log::warn!("error login. {}", &err);
                Err(err.to_string())
            }
        }
    }

    #[tauri::command]
    pub fn logout(app_manager: State<'_, AppManager>) -> Result<String, String> {
        log::trace!("call logout");
        match app_manager.lib.lock().unwrap().logout() {
            Ok(ret) => {
                log::trace!("success logout. {}", &ret);
                Ok(ret)
            }
            Err(err) => {
                log::warn!("error logout. {}", &err);
                Err(err.to_string())
            }
        }
    }

    #[tauri::command]
    pub fn get_price(app_manager: State<'_, AppManager>) -> Result<String, String> {
        log::trace!("call get_price");
        match app_manager.lib.lock().unwrap().get_price() {
            Ok(ret) => {
                log::trace!("success get_price. {}", &ret);
                Ok(ret)
            }
            Err(err) => {
                log::warn!("error get_price. {}", &err);
                Err(err.to_string())
            }
        }
    }

    #[tauri::command]
    pub fn order(
        app_manager: State<'_, AppManager>,
        request: OrderRequest,
    ) -> Result<String, String> {
        log::trace!("call order");
        match app_manager.lib.lock().unwrap().order(&request) {
            Ok(ret) => {
                log::trace!("success order. {}", &ret);
                Ok(ret)
            }
            Err(err) => {
                log::warn!("error order. {}", &err);
                Err(err.to_string())
            }
        }
    }
}
