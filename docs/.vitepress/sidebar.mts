// docs/.vitepress/sidebar.ts
import fs from 'fs'
import path from 'path'

interface SidebarItem {
  text: string
  link: string
}

export function getSidebar(dirPath: string, basePath: string): SidebarItem[] {
  const items: SidebarItem[] = []
  
  try {
    const files = fs.readdirSync(dirPath)
    
    files.forEach(file => {
      // 只处理 .md 文件，忽略 index.md
      if (file.endsWith('.md') && file !== 'index.md') {
        const fileName = file.replace('.md', '')
        
        // 1. 【默认展示名】先去掉文件名开头的数字序号作为兜底显示
        let displayText = fileName.replace(/^\d+-/, '') 
        
        // 2. 【读取 Frontmatter】尝试提取 title
        try {
          const content = fs.readFileSync(path.join(dirPath, file), 'utf-8')
          
          // 增强版正则：支持 title: xxx, title: "xxx", title: 'xxx'，且允许前后有空格
          const match = content.match(/^title:\s*['"]?(.+?)['"]?\s*$/m)
          
          if (match && match[1]) {
            displayText = match[1].trim()
          }
        } catch (e) {
          // 读取失败时静默处理，使用默认的文件名
        }

        items.push({
          text: displayText,
          link: `${basePath}/${fileName}`
        })
      }
    })

    // 3. 【排序逻辑】严格按照物理文件名自然排序 (支持 01-, 02- 前缀)
    items.sort((a, b) => a.link.localeCompare(b.link))

  } catch (err) {
    console.error(`读取目录失败: ${dirPath}`, err)
  }

  return items
}