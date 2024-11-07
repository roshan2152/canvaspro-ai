import React from 'react'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from '@/components/ui/button'
import { CloudDownload, FileImage, MousePointer2, Redo2, Save, Undo2 } from 'lucide-react'


function Navbar() {
    return (
        <nav className='w-full flex items-center h-14 p-2 gap-4 '>
            <div>LOGO</div>
            <div className='w-full flex items-center gap-x-2 h-full'>
                <DropdownMenu modal={false}>
                    <DropdownMenuTrigger asChild>
                        <Button>File</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align='start'
                        className='min-w-80 sm:min-w-32 max-w-32 sm:max-w-80'>
                        <DropdownMenuLabel className='text-ellipsis overflow-hidden text-nowrap'>My Accouacnnt njka asnjfas asjna njka asnjfas asjna</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem cursor-pointer>
                            <CloudDownload />
                            Import JSON file
                        </DropdownMenuItem>
                        <DropdownMenuItem cursor-pointer>
                            <CloudDownload />
                            Export JSON file
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FileImage />
                            Export JPG
                        </DropdownMenuItem>
                        <DropdownMenuItem cursor-pointer>
                            <FileImage />
                            Export PNG
                        </DropdownMenuItem>
                        <DropdownMenuItem cursor-pointer>
                            <FileImage />
                            Export SVG
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
                <Button>
                    Resize
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                    <MousePointer2 />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                    <Undo2 />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                    <Redo2 />
                </Button>
                <Button variant={"ghost"} size={"icon"}>
                    <Save />
                </Button>
            </div>
        </nav>
    )
}

export default Navbar