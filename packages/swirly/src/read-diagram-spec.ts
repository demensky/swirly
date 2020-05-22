import { promises as fs } from 'fs'
import YAML from 'js-yaml'
import path from 'path'
import { parseMarbleDiagramSpec } from 'swirly-parser'
import { DiagramSpecification } from 'swirly-types'

import { YAML_EXTENSIONS } from './constants'

export const readDiagramSpec = async (
  inFilePath: string
): Promise<DiagramSpecification> => {
  const inFileContents: string = await fs.readFile(inFilePath, 'utf8')

  if (YAML_EXTENSIONS.includes(path.extname(inFilePath))) {
    return YAML.safeLoad(inFileContents)
  }

  return parseMarbleDiagramSpec(inFileContents)
}