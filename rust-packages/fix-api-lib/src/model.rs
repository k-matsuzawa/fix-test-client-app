extern crate serde_json;
extern crate tracing;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct LoginRequest {
	pub sender_comp_id: String,
	pub sender_sub_id: Option<String>,
	pub target_comp_id: String,
	pub target_sub_id: Option<String>,
	pub security_exchange: Option<String>,
	pub symbol: Option<String>,
	pub side: Option<String>,
	pub ord_type: Option<String>,
	pub time_in_force: Option<String>,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub struct OrderRequest {
	pub quote_id: Option<String>,
	pub security_exchange: Option<String>,
	pub symbol: String,
	pub side: String,
	pub order_qty: String,
	pub price: String,
}
