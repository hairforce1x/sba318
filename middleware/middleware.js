const logger = (req, res, next) => {
    const method = req.method;
    const url = req.url;
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] ${method} ${url}`);
    next();
};

// This started firing when I added put method to courses so I commented it out

// const validateGolfer = (req, res, next) => {
//     try {
//         if (typeof req.body.name !== "string") {
//             return res.status(400).send({error: 'no name'})
//         };
//         next();
//     } catch (e) {
//         console.log(e);
//         return res.status(400).send({error: 'no data'});
//     }
// }

module.exports = { logger };