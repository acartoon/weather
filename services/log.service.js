import chalk from "chalk"
import dedent from "dedent-js"

export const printError = (error) => {
    console.log(chalk.red(`[ERROR] ${error}`))
}

export const printSuccess = (success) => {
    console.log(chalk.green(`[SUCCESS] ${success}`))
}

export const printHelp = () => {
    console.log(
        dedent(`${chalk.cyan('HELP')}
            Без параметров - вывод погоды
            -h [HELP] - вывод помощи
            -s [CITY] - вывод города
            -t [TOKEN] - сохранение токена
        `)
    )
}