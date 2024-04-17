import * as fs from 'fs'
import { resolve } from 'path'

const targetDir = resolve(__dirname, "../modes")
const outputFile = resolve(__dirname, "../modes/modes.json")
fs.readdir(targetDir, (err, files) => {
    if(err){
        throw new Error('not found')
    }
    const separator = '.'
    const excludedFiles = ['modes.json']
    const targetExtension = 'json'
    const outputDataEntry = files
    .filter(f => !excludedFiles.includes(f) && f.endsWith(separator + targetExtension))
    .map(f => {
        const path = resolve(__dirname, `../modes/${f}`)
        return [
            f.split(separator).filter(str => str !== targetExtension).join(separator), 
            JSON.parse(fs.readFileSync(path, 'utf-8'))
        ]
    })

    fs.writeFile(outputFile, JSON.stringify(Object.fromEntries(outputDataEntry)), (err) => {
        if(err){
            throw new Error('failed')
        }
        console.log('modes.json created')
    })
})