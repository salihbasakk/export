const exceljs = require('exceljs');

exports.makeFile = (req, res, next) => {
    const { config, columns, rows } = req.body;

    const workbook = createWorkbook(config, columns, rows);

    res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
    );
    res.setHeader('Content-Disposition', 'attachment; filename=' + config.fileName + '.xlsx');

    return workbook.xlsx.writeFile('file/' + config.fileName + '.xlsx').then(function () {
        res.status(200).end();
    });
};

const createWorkbook = (config, columns, rows) => {
    const workbook = new exceljs.Workbook();
    const worksheet = workbook.addWorksheet(config.worksheetName);

    worksheet.columns = columns.map((col) => {
        return { header: col.title, key: col.title, width: config.columnWidth };
    });

    worksheet.addRows(rows);

    for (const column of columns) {
        const col = worksheet.getColumn(column.title);

        col.eachCell((cell, rowNumber) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: {
                    argb: rowNumber === 1 ? config.header.backgroundColor : column.backgroundColor
                        ? column.backgroundColor : '',
                },
            };

            cell.border = config.border;
        });
    }

    return workbook;
};
