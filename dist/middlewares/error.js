export default (err, req, res, nxt) => {
    res.status(err.status ?? 500).send({ message: err.message ?? 'Internal Server Error' });
};
//# sourceMappingURL=error.js.map