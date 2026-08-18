local watermarkVisible = Config.Enabled

local function updateWatermark()
    SendNUIMessage({
        action = 'update',
        visible = watermarkVisible,
        text = Config.TopText,
        opacity = Config.Opacity,
        fontSize = Config.FontSize,
        letterSpacing = Config.LetterSpacing,
        x = Config.Position.x,
        y = Config.Position.y
    })
end

CreateThread(function()
    Wait(1000)
    updateWatermark()
end)

RegisterCommand(Config.ToggleCommand, function()
    watermarkVisible = not watermarkVisible
    updateWatermark()
end, false)

RegisterNetEvent('projectkita-watermark:toggle', function(state)
    watermarkVisible = state == true
    updateWatermark()
end)
