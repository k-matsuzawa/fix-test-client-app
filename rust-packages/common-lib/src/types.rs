extern crate tracing;
use std::fmt;

/// error on fix.
#[derive(Debug, PartialEq, Eq, Clone)]
pub enum AppError {
    /// Unknown error.
    Unknown(String),
    /// Internal error.
    Internal(String),
    /// Illegal input argument error.
    IllegalArgument(String),
    /// Illegal statement error.
    IllegalState(String),
    /// Input argument out of range.
    OutOfRange(String),
    /// Disk access error.
    DiskAccess(String),
    /// Sign verification error.
    SignVerification(String),
    /// Not found error.
    NotFound(String),
}

impl fmt::Display for AppError {
    fn fmt(&self, f: &mut fmt::Formatter) -> fmt::Result {
        match *self {
            AppError::Unknown(ref a) => write!(f, "[Unknown]: {}", a),
            AppError::Internal(ref a) => write!(f, "[Internal]: {}", a),
            AppError::IllegalArgument(ref a) => write!(f, "[IllegalArgument]: {}", a),
            AppError::IllegalState(ref a) => write!(f, "[IllegalState]: {}", a),
            AppError::OutOfRange(ref a) => write!(f, "[OutOfRange]: {}", a),
            AppError::DiskAccess(ref a) => write!(f, "[DiskAccess]: {}", a),
            AppError::SignVerification(ref a) => write!(f, "[SignVerification]: {}", a),
            AppError::NotFound(ref a) => write!(f, "[NotFound]: {}", a),
        }
    }
}
