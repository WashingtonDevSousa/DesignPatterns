// Sistema de conversão e compressão de Vídeos

class VideoConverter {
    convertVideo(sourceFile, targetFormat){
        console.log(`Convertendo video ${sourceFile} para ${targetFormat}`)
    // lógica de conversão de video
    }
}

class VideoResizer {
    resizeVideo(sourceFile, targetResolution){
        console.log(`Redimensioando video ${sourceFile} para ${targetResolution}`)
    // lógica de redimensionamento de video
    }
}

class VideoConverterFacade {
    constructor(){
        this.videoConverter = new VideoConverter()
        this.videoResizer = new VideoResizer()
    }

    convertVideoToFormat(sourceFile, targetFormat){
        console.log('---')
        this.videoConverter.convertVideo(sourceFile, targetFormat)
        console.log(`Video convertido com sucesso.`)
    }
    resizeVideoToResolution(sourceFile, targetResolution){
        console.log('---')
        this.videoResizer.resizeVideo(sourceFile, targetResolution)
        console.log(`Video redimensionado com sucesso.`)
    }
    convertAndResolutionVideo(sourceFile,targetFormat, targetResolution){
        console.log('---')
        this.videoConverter.convertVideo(sourceFile, targetFormat)
        this.videoResizer.resizeVideo(sourceFile, targetResolution)
        console.log(`Video convertido e redimensionado com sucesso.`)
        console.log('---')
    }
}

const videoConvertFacade = new VideoConverterFacade()

videoConvertFacade.convertVideoToFormat("video.mp4", "avi")
videoConvertFacade.resizeVideoToResolution("video.mp4", "1280x720")
videoConvertFacade.convertAndResolutionVideo("video.mp4","mkv", "1920x1080")

