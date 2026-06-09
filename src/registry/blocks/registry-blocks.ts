import type { Registry } from "shadcn/schema"

import { blocks as registryBlocks } from "./_registry"

export const blocks: Registry["items"] = [...registryBlocks]
