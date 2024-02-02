use crate::{OrderRequest, LoginRequest};

pub struct FixApiLibraryConfig {}

pub struct FixEventData {
    pub security_exchange: String,
    pub symbol: String,
    pub ord_type: String,
    pub time_in_force: String,
    pub account: String,
}

impl Default for FixEventData {
    fn default() -> Self {
        Self {
            security_exchange: Default::default(),
            symbol: Default::default(),
            ord_type: Default::default(),
            time_in_force: Default::default(),
            account: String::default(),
        }
    }
}

pub struct FixApiLibrary {
    // TODO(k-matsuzawa): めも。DBクライアントの実体をここで保持して各Repositoryに参照を入れたかったのだが、
    // どうにもライフタイム管理のせいでうまく行かず。仕方ないので一旦Config自体を引数で渡して持ち回すようにする。
    data: FixEventData,
}

impl FixApiLibrary {
    pub fn new() -> Self {
        Self {
            data: FixEventData::default(),
        }
    }

    pub fn initialize(&mut self, lib_config: FixApiLibraryConfig) {
        // self.config = Config::new(app_config.get_db_path(), app_config.get_db_migration_dir());
        // start fix
        // https://github.com/ferrumfix/ferrumfix/blob/develop/examples/31_tcp_sofh_tokio_codec/src/main.rs
        //
        // save network object to FixEventData
    }

    pub fn login(
        &mut self,
		req: &LoginRequest,
    ) -> Result<String, String> {
        // FIXME: implements
        Ok(String::default())
    }
    pub fn logout(&mut self) -> Result<String, String> {
        // FIXME: implements
        Ok(String::default())
    }
    pub fn get_price(&mut self) -> Result<String, String> {
        // FIXME: implements
        Ok(String::default())
    }
    pub fn order(&mut self, req: &OrderRequest) -> Result<String, String> {
        // FIXME: implements
        Ok(String::default())
    }
}
